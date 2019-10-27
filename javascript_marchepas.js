function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
 return str;
}
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $.getJSON("http://www.omdbapi.com/?i=tt"+movie+"&apikey=525ac35b", function(data) {
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var season = data.Season;
    var imdbVotes = data.imdbVotes; //les votes ne marchent pas :(
    var votes = parseInt(imdbVotes,10);
    var type = data.Type;
    var link = 'http://www.imdb.com/title/tt'+movie+'/';
    var debug = 'http://www.omdbapi.com/?i=tt'+movie+'&apikey=525ac35b'
    $("#title").text(title);
    $("#type").text(type);
    $("#year").text(year);
    $("#rating").text(rating);
    $("#actors").text(actors);
    $("#plot").text(plot);
    $("#movie").text(movie);
    $("#season").text(season);
    $("#debug").text(debug);
    $("#link").attr("href", link);

    if (votes > 300) {
    console.log(votes);
                        }
    else {
    document.location.reload(true);
}
  })
