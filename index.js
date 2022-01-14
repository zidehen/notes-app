// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

const model = new NotesModel();

const api = new NotesApi();

const view = new NotesView(model, api)

// api.emojify({"text": ":fire:"}, (data) => console.log(data), (data) => console.log(data))

api.loadNotes((notes) => {
  notes.forEach(note => {
    model.addNote(note);  
  });
  view.displayNotes();
});


