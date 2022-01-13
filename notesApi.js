class NotesApi {


  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())  // converting from json string to javascript object
      .then(data => 
        callback(data));
  }

  createNote(note, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(note),
    })
    .then(response => {
      console.log(JSON.stringify(note))
      // console.log(response.json())
      return response.json()
    })
    .then(data => {
      console.log(data)
      callback(data)})
    .catch((error) => {
      console.error('Error:', error)
    });
    
  }

}

module.exports = NotesApi;