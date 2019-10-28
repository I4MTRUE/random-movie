function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
 return str;
}
var i = 0
var votes = 0
var a = 0
votes < 10
function yeet(movie,callback){
$.getJSON("http://www.omdbapi.com/?i=tt"+movie+"&apikey=bf57cc7e", function(data){
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
  var debug = 'http://www.omdbapi.com/?i=tt'+movie+'&apikey=bf57cc7e'
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
  callback(data.imdbVotes)
}, i = i + 1)}

function handleName(Title) {
    votes = Title;
    votes = votes || 0;
          if (votes == "N/A") {votes = 0;}
          else {votes = votes;};
    votes = parseInt(votes);
}
function votes(){
  console.log(votes);
}

votes(votes);



var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
yeet(movie, handleName);

console.log(i);
if(votes==0){
  console.log("nooooo")
}
