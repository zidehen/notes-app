class NotesApi {


  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())  // converting from json string to javascript object
      .then(data => 
        callback(data))
      .catch((error) => {
        console.error('Error', error);
      });
  }

  createNote(note) {
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(note),
    })
    .then(response => {
      return response.json()
    })
    .catch((error) => {
      console.error('Error', error);
    });
  }

  resetNotes() {
    fetch('http://localhost:3000/notes', {
      method: 'DELETE', 
    })
    .then(response => {
      return response.json()
    })
    .catch((error) => {
      console.error('Error', error);
    });
  }

}

module.exports = NotesApi;