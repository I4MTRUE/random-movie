function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
 return str;
}
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $.getJSON("http://www.omdbapi.com/?i=tt"+movie+"&apikey=525ac35b", function(data) {
    var imdbVotes = data.imdbVotes ;
    var votes = parseInt(imdbVotes,10);
    if (votes < 300) {document.location.reload(true);}
    else {console.log(votes);
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var season = data.Season;
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


    if (type = "episode") {
      var seriesID = data.seriesID;
      $.getJSON("http://www.omdbapi.com/?i=tt"+seriesID+"&apikey=525ac35b", function(series) {
      var seriestitle = data.Title;
      console.log(seriestitle);})
    }
    else {
      console.log("oh nananana");
    }
  }})
