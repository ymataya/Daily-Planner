$(document).ready (function() {

var hours = 9

for (i=0; i<8;i++) {
    if (hours > 12) {
        hours=1
    }
    if (hours <= 12 && hours > 7) {
        var task = localStorage.getItem(hours + "am");
        $("#" + hours + "am-text").append(task)
        hours+=1
    } else {
        var task = localStorage.getItem(hours + "pm");
        $("#" + hours + "pm-text").append(task)
        hours+=1
    }
}
var task = localStorage.getItem("5pm");
$("#5pm-text").append(task)

var task = localStorage.getItem("12pm");
$("#12pm-text").append(task)

//HTML Variables
var currentDay=$("#currentDay");
var currentTime=$("#currentTime");
var hourTime=$(".time");

//Other Variables
var dateNow = moment().format('dddd, MMMM Do YYYY');
var timeNow = moment().format('H:mm');
// console.log(timeNow)

function timeCheck (t) {
var curTime = ""

for(i=0;i<t.length;i++){
    console.log(t[i]);
    if(t[i] === ":"){
        return curTime;
    }else {
        curTime+=t[i]
    }
    console.log(curTime)
}
console.log(curTime);
// console.log(typeof timeNow)
}
var timeCompare = timeCheck(timeNow)
console.log(timeCompare, "check time")

//Time
for (var i=0; i<8; i++) {
    if (timeCompare === "9") {
        $("#9am").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 9) {
        $("#9am").css("background-color", "#72a78a");
    }
    if (timeCompare === "10") {
        $("#10am").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 10) {
        $("#10am").css("background-color", "#72a78a");
    }
    if (timeCompare === "11") {
        $("#11am").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 11) {
        $("#11am").css("background-color", "#72a78a");
    }
    if (timeCompare === "12") {
        $("#12pm").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 12) {
        $("#12pm").css("background-color", "#72a78a");
    }
    if (timeCompare === "13") {
        $("#1pm").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 13) {
        $("#1pm").css("background-color", "#72a78a");
    }
    if (timeCompare === "14") {
        $("#2pm").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 14) {
        $("#2pm").css("background-color", "#72a78a");
    }
    if (timeCompare === "15") {
        $("#3pm").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 15) {
        $("#3pm").css("background-color", "#72a78a");
    }
    if (timeCompare === "16") {
        $("#4pm").css("background-color", "#aeccbc");
    } else if (parseInt(timeCompare) < 16) {
        $("#4pm").css("background-color", "#72a78a");
    }
    if (timeCompare === "17") {
        $("#5pm").css("background-color", "red");
    } else if (parseInt(timeCompare) < 17) {
        $("#5pm").css("background-color", "#72a78a");
    }
}
//Displaying on Web
currentDay.text(dateNow);
currentTime.text(timeNow);
} 

); //end of document ready

//Input
$(document).on("click", ".save", function(e){
    e.preventDefault();
    console.log("clicking");
    console.log(e.target);
    if (e.target.id === "9am-save") { // does it mean the function should target the id called "9am-save"?
        var text=$("#9am-text").val(); // the val() will come from user input, which is typed in in the textarea id called "#time-text"
        console.log(text)
        localStorage.setItem("9am",text); // sending the text ($("#time-text".val()) to the local storage
    } 
    if (e.target.id === "10am-save") {
        var text=$("#10am-text").val();
        console.log(text)
        localStorage.setItem("10am",text);
    }
    if (e.target.id === "11am-save") {
        var text=$("#11am-text").val();
        console.log(text)
        localStorage.setItem("11am",text);
    }
    if (e.target.id === "12pm-save") {
        var text=$("#12pm-text").val();
        console.log(text)
        localStorage.setItem("12pm",text);
    }
    if (e.target.id === "1pm-save") {
        var text=$("#1pm-text").val();
        console.log(text)
        localStorage.setItem("1pm",text);
    }
    if (e.target.id === "2pm-save") {
        var text=$("#2pm-text").val();
        console.log(text)
        localStorage.setItem("2pm",text);
    }
    if (e.target.id === "3pm-save") {
        var text=$("#3pm-text").val();
        console.log(text)
        localStorage.setItem("3pm",text);
    }
    if (e.target.id === "4pm-save") {
        var text=$("#4pm-text").val();
        console.log(text)
        localStorage.setItem("4pm",text);
    }
    if (e.target.id === "5pm-save") {
        var text=$("#5pm-text").val();
        console.log(text)
        localStorage.setItem("5pm",text);
    }
});




