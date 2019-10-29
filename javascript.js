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
var fuk = 0
votes < 10
var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
yeet(movie);
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

  votes = votes || 0;
        if (votes == "N/A") {votes = 0;}
        else {votes = votes;};
  votes = parseInt(votes);
  if (votes > 50){fuk = 1
  console.log(fuk);
  fuk = parseInt(fuk);};
  i = i + 1
if(fuk == 0){
console.log("here we go again")
var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
yeet(movie);
}
else{
$("#title").text(title);
$("#type").text(type);
$("#year").text(year);
$("#rating").text(rating);
$("#actors").text(actors);
$("#plot").text(plot);
$("#movie").text(movie);
$("#season").text(season);
$("#debug").text(debug);
$("#link").attr("href", link);}})}
