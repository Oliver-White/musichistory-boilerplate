var data_request = new XMLHttpRequest();

dataRequest.addEventListener("load", data_request_complete);
dataRequest.addEventListener("error", data_request_failed);

function data_request_complete(event) {
   var data = JSON.parse(event.target.responseText);
}

function data_request_failed(event) {
  console.log("No songs for you!");
}

data_request.open("GET", "songs.json");

data_request.send();


function show_sata(songs){
	var display_songs = document.getElementById("artist");

  for(whatever in songs) {
    var display_songs = '';
    var song_artist = songs[artist];
    display_songs += "<div>";
    display_songs += "<h2>" + colorItem.color + ": " + colorItem.value + "</h2>"
    display_songs += "</div>";

    display_songs.innerHTML += song_artist;
  }

}












