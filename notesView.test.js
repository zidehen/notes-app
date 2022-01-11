/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes view', () => {
  
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model)
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    
    view.displayNotes()

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

});