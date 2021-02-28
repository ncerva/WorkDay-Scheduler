//time and date
//
var time = moment().format(); 
var date = moment().format('MMM Do YYYY');
var textarea = "text"
var savebtn = "save"

$("todayDate").html(date);

//local storage
localStorage.setItem(time,date,textarea)

// event listener for save button
addEventListener.apply("click" + savebtn)

// past present future color coded. if then statement 
var timeBlock = ()
if (timeBlock<time){

}
// if (current time < x = past color code it orange )
// if current time >x = future color code it blue