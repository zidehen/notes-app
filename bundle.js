(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.model = [];
        }
        getNotes() {
          return this.model;
        }
        addNote(note) {
          this.model.push(note);
        }
        reset() {
          this.model = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note-btn");
          this.resetButtonEl = document.querySelector("#reset-btn");
          this.api = api2;
          this.buttonEl.addEventListener("click", () => {
            let newNote = document.querySelector("#add-note-input");
            this.addNewNote(newNote.value);
            newNote.value = null;
          });
          this.resetButtonEl.addEventListener("click", () => {
            this.resetNotes();
          });
        }
        resetNotes() {
          this.model.reset();
          this.api.resetNotes();
          this.displayNotes();
        }
        addNewNote(newNote) {
          this.api.emojify({ "text": newNote }, (data) => {
            this.model.addNote(data);
          }, () => {
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll("div.note").forEach((note) => note.remove());
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback(data)).catch((error) => {
            console.error("Error", error);
          });
        }
        emojify(note, callback1, callback2) {
          fetch("https://makers-emojify.herokuapp.com/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(note),
            credentials: "omit",
            mode: "cors"
          }).then((response) => {
            return response.json();
          }).then((data) => {
            console.log(data.emojified_text);
            callback1(data.emojified_text);
            this.createNote({ content: data.emojified_text });
            callback2(data.emojified_text);
          }).catch((err) => console.log(`There is an error ${err}`));
        }
        createNote(note) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
          }).then((response) => {
            return response.json();
          }).catch((error) => {
            console.error("Error", error);
          });
        }
        resetNotes() {
          fetch("http://localhost:3000/notes", {
            method: "DELETE"
          }).then((response) => {
            return response.json();
          }).catch((error) => {
            console.error("Error", error);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var model = new NotesModel();
  var api = new NotesApi();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    notes.forEach((note) => {
      model.addNote(note);
    });
    view.displayNotes();
  });
})();
