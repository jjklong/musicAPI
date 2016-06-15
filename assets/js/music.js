$(function(){
  'use strict';
});

console.log('hey');

$('.search').submit(function search (e) {
  e.preventDefault();

  var artistSearch = $('input[class="form-control"]').val();
  console.log(artistSearch);

  //ARTIST SEARCH:
  $.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artistSearch + '&api_key=eadc058a923c4177179721feed47e2a6&format=json')
    .done(artistResults);
    function artistResults(artist, pic) {
      var artistName = "";
      var artistPic = "";
      var txt = '#txt';
      console.log(artist.results);
      for (a = 0; a < 5; a++){
        console.log(artist.results.artistmatches.artist[a].name); //returns top 6 results
        artistName = [a+1] + ')' + artist.results.artistmatches.artist[a].name;
        artistPic = artist.results.artistmatches.artist[a].image[2];
        var largePic = artistPic['#text'];
        console.log(largePic);

      $('#'+[a+1]).append(artistName);
      $('#d'+[a+1]).append('"<img src="' + largePic + '" alt="" />"');
      }
    }






 }); //END func.search(e)
