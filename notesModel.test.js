const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  const notes = new NotesModel();

  it('returns an "[]" ', () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it('adds a note', () => {
    notes.addNote('Buy milk');
    expect(notes.getNotes()).toContain('Buy milk');
  });

  it('empties the notes', () => {
    notes.addNote('Buy milk');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});