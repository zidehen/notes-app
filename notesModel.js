class NotesModel {
  constructor() {
    this.notes = []
  }

  addNote(note) {
    console.log('item added')
    return this.notes.push(note); 
  }

  getNotes() {
    return this.notes
  }
  
  reset() {
    return this.notes = []
  }

}


module.exports = NotesModel;

// const model = new NotesModel();
// console.log(model.getNotes())
// console.log(model.addNote('Buy milk'));
// console.log(model.addNote('Go to the gym'));

// console.log(model.getNotes());
// console.log(model.reset());
// console.log(model.getNotes());