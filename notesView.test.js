/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Notes view', () => {
  
  let model;
  let api;
  let view;
  
  let inputEl;
  let buttonEl;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    api = new NotesApi();
    view = new NotesView(model, api);

    inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Go food shopping'

    buttonEl = document.querySelector('#add-note-btn');
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the gym'
    }));
    buttonEl.click();
  });

  it('adds a note', () => {
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Go food shopping');
  });

  it('clear the list of previous notes before displaying', () => {        
    inputEl.value = 'Go to the gym';

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the cinema'
    }));

    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
});