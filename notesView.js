class NotesView {
  
  constructor(model, api) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-btn');
    
    this.api = api;

    this.buttonEl.addEventListener('click', () => {
      let newNote = document.querySelector('#add-note-input');
      this.addNewNote(newNote.value);
      newNote.value = null;
   });
  }
  
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.api.createNote({ content: newNote }, (data) => {console.log(data)});
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('div.note').forEach(note => note.remove())
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;