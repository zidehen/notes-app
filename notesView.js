class NotesView {
  
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-btn');
    
    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
   });
  }
  
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
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