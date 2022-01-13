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
    api.createNote('Go to the cinema', (sendingInfo) => {
      console.log(sendingInfo)
    })
    // refresh the page
    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the cinema');
    });
  })

})