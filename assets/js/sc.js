SC.initialize({
  client_id: '5f9938507fa024d329ff97f9b8cb86a2'
});

$('.search').submit(function search () {
  // e.preventDefault();

  //reset every new search
  for (a = 0; a<5; a++) {
  $('.lgi'+[a+1]).html('');
  }

  var artistSearch = $('input[class="form-control"]').val();
  console.log(artistSearch);


  SC.get('/tracks', {
  q: artistSearch
  }).then(function(tracks) {
    console.log(tracks);
  for (a = 0; a<5; a++) {
  $('.lgi'+[a+1]).append(tracks[a].title);
  $('.lgi'+[a+1]).append('<a href="' + tracks[a].permalink_url + '">'+'<i class="fa fa-soundcloud fa-2x" aria-hidden="true"></i>' + '</a>');
  }
  });

});
