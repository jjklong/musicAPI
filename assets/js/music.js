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


    function artistResults(artist) {
      console.log(artist.results.artistmatches.artist[0].name);      
    }






 }); //END func.search(e)
