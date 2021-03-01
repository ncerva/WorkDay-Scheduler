//time and date
//current day displayed
// var textarea = "text"
// var savebtn = "save"




// if current time >x = future color code it blue
//var timeBlock =
// if (timeBlock<time){

// }

$(document).ready(function () {
    var currentTime = moment().hour();
var dateandtime = moment().format('MMMM Do YYYY, h:mm:ss a')

$("#currentDay").html(dateandtime);
//prevent default
//local storage

// event listener for save button
// addEventListener.apply("click" + savebtn)

// connect it to the timer
// past present future color coded. if then statement 
// if (current time < x = past color code it )
$('.description').each(function(){
    var timeBlock = $(this).parent().attr("id")
    console.log(timeBlock)
    if (timeBlock < currentTime) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    if (timeBlock < currentTime) {
        $(this).addClass("past")
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).addClass("present")
        $(this).removeClass("past")
        $(this).removeClass("future")
    }
})
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})