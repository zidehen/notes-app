const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch to request list of notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
        note: 'Go to the gym'
      }));
    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the gym');
    });
  });
  
  it('createNote should post a note to the server', () => {
    const api = new NotesApi()
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the cinema'
    }));
    api.createNote({content: 'Go to the cinema'}, (sendingInfo) => {
      (sendingInfo);
    })
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Go to the cinema'
    }));
    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the cinema');
    });
  })

})