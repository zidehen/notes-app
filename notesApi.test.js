const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch to request list of notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
        note: 'Go to the gym'
      }));
    api.loadNotes((info) => {
      expect(info.note).toEqual('Go to the gym')
    })
  })
})