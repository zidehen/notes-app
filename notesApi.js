class NotesApi {


  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())  // converting from json string to javascript object
      .then(data => 
        callback(data));
  }

}

module.exports = NotesApi;