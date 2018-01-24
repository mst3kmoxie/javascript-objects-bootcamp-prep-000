var playlist = {
<<<<<<< HEAD
    benjaminGibbard: "You Remind Me Of Home",
    gesuNoKiwamiOtome: "Darumasan", 
    simonAndGarfunkel: "El Condor Pasa",
    theBeautifulSouth: "Good As Gold"
=======
    "Benjamin Gibbard": "You Remind Me Of Home",
    GesuNoKiwamiOtome: "Darumasan", 
    SimonAndGarfunkel: "El Condor Pasa",
    TheBeautifulSouth: "Good As Gold"
>>>>>>> dbcc7a500c0acd234247ae3fa90d118e90ae08da
};


function updatePlaylist(playlist, artist, song) {

  return Object.assign ({}, playlist, { [artist]: song });

}


<<<<<<< HEAD
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  
  return playlist;
}
=======

>>>>>>> dbcc7a500c0acd234247ae3fa90d118e90ae08da


