$(document).ready (function() {

//HTML Variables
var currentDay=$("#currentDay");
var currentTime=$("#currentTime");
var hourTime=$(".time");
var timeBlock=$("#reminder");

//Other Variables
var dateNow = moment().format('dddd, MMMM Do YYYY');
var timeNow = moment().format('H:mm');



//Displaying on Web
currentDay.text(dateNow);
currentTime.text(timeNow);

//Time
var hours= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
for (var i=0; i<hours.length; i++) {
    console.log(hours[i]) //gives each element in hours array
    var time = $("<span>");
    time.text(hours[i] + ":00"); // gives all elements in hours array
    hourTime.append(time);
}
});