/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Notes view', () => {
  
  it('adds a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api)

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the gym'
    }));

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
    const api = new NotesApi();
    const view = new NotesView(model, api)
    
    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Go food shopping';

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the gym'
    }));
    
    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();
    
    const inputEl2 = document.querySelector('#add-note-input');
    inputEl2.value = 'Go to the gym';

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the cinema'
    }));

    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })

});