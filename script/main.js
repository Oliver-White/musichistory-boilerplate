

function execute_this_if_xhr_fails(xhr_event) {
  console.log("An error occured while transferring the data");
}

function execut_this_code_after_file_is_loaded() {
  console.log("this", this );
  console.log("execute this code after file is loaded");
  console.log( Date.now() );

  // parse the response text as JSON. Turns string of characters into a JS object
  // (observe that JSON keys are strings, which is not how a JS object is formatted)
  var data = JSON.parse(this.responseText); // 'this' is the XMLHttpRequest
  console.log("data", data );

  var song_list = document.getElementById("all_my_songs");

  for( current_song in data.songs ) {
    var song_data = '';
    var song = data.songs[current_song]
    song_data += "<div class='song-block'>";
    song_data += `<h1>${song.title}</h1>`;
    song_data += "<div class='artist'>Performed by ";
    song_data += song.artist;
    song_data += "</div>";
    song_data += "<div class='album'>On the album ";
    song_data += song.album;
    song_data += "</div>";
    song_data += "</div>";

    songList.innerHTML += songData;
  }
}

var my_request = new XMLHttpRequest();

// The event listener listens for the load event, THEN runs.
// This is asynchronous and acts as a callback.
// The functions are not called until after the event happens.
my_request.addEventListener("load", execute_this_code_after_file_is_loaded);
my_request.addEventListener("error", execute_this_if_xhr_fails);

// open tells it what to do with one of the HTTP verbs (GET, POST, PUT, DELETE)
my_request.open("GET", "songs.json");
// starts the process. It means go
my_request.send();

console.log("Last line in JS file");
console.log(Date.now()); //time stamp when page ends

