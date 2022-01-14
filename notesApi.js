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
  emojify(note, callback1, callback2) {
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note), 
      credentials: "omit",
      mode: "cors",
    })
    .then(response => {
      return response.json()
    })
    .then(data => {console.log(data.emojified_text);
    callback1(data.emojified_text);
    this.createNote({ content: data.emojified_text })
    callback2(data.emojified_text)})
    .catch(err => console.log(`There is an error ${err}`))
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