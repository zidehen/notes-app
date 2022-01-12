/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes view', () => {
  
  it('adds a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model)

    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Go food shopping'

    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Go food shopping');
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    
    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Go food shopping';

    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();
    
    const inputEl2 = document.querySelector('#add-note-input');
    inputEl2.value = 'Go to the gym';

    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })

});