//time and date
//current day displayed
var textarea = "text"
var savebtn = "save"
var currentTime = moment().hour();
var dateandtime = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#todayDate").html(date);

//prevent default
//local storage
localStorage.setItem(time,date,textarea)

// event listener for save button
addEventListener.apply("click" + savebtn)

// connect it to the timer
// past present future color coded. if then statement 
// if (current time < x = past color code it )
if (timeBlock < currentTime) {
    $(this).addclass("present");
    $(this).removeclass("future");
    $(this).removeclass("past");

if (timeBlock < currentTime) {
    $(this).addclass("past")
    $(this).removeclass("future");
    $(this).removeclass("present");

else (timeBlock==now){
    $(this).addclass("present")
    $(this).removeclass("past")
    $(this).removeclass("future")
}
}
}
// if current time >x = future color code it blue
var timeBlock =
if (timeBlock<time){

}

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })