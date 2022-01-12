class NotesModel {
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
}


module.exports = NotesModel;