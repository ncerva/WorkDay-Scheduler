//time and date
//
var time = moment().format(); 
var date = moment().format('MMM Do YYYY');
var textarea = "text"
var savebtn = "save"

$("TodayDate").html(date);

//local storage
// 
localStorage.setItem(time,date)

// event listener for save button
