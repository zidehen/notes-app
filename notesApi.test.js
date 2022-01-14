const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {

  let api;

  beforeEach(() => {
    api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the gym'
    }));
  });

  it('calls fetch to request list of notes', () => {
    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the gym');
    });
  });
  
  it('createNote should post a note to the server', () => {
    api.createNote({content: 'Go to the gym'})

    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the gym'
    }));

    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the gym');
    });
  })

  it('deletes all notes from the server', () => {
    api.createNote({content: 'Go to the gym'})

    fetch.mockResponseOnce(JSON.stringify({
  
    }));
    
    api.resetNotes()

    api.loadNotes((info) => {
      expect(info.note).toBeFalsy;
    });
  })

})