var songTitle, artistName
var playlist = {artistName: songTitle}
playlist.win = "lose"
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}
