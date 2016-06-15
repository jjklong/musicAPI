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
      var artistName = "";
      var artistPic = "";
      var url = "";

      console.log(artist.results);
      for (a = 0; a < 5; a++){
        var id = [a+1] + ')';
        console.log(artist.results.artistmatches.artist[a].name); //returns top 6 results
        artistName = artist.results.artistmatches.artist[a].name;
        artistPic = artist.results.artistmatches.artist[a].image[2];
        url = artist.results.artistmatches.artist[a].url;
        var largePic = artistPic['#text'];
        console.log(largePic);
        console.log(id + artistName);

      $('#'+[a+1]).append(artistName);
      $('#d'+[a+1]).append('<img src="' + largePic + '" href="' +url+ '" />');
      }
    }

    // $.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artistName + '&api_key=eadc058a923c4177179721feed47e2a6&format=json')
    //   .done(artistInfo);
    //
    //   function artistInfo(info) {
    //     var summary = "";
    //     for (a = 0; a < 5; a++){
    //       // summary = info.artist[a].summary;
    //
    //     $('#d'+[a+1]).append(info.artist.similar);
    //     }
    //     console.log(info);
    //   }

 }); //END func.search(e)
