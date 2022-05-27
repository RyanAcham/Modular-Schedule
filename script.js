// first, getting the current date
var today = moment().format('LLLL'); 
document.getElementById("date").innerHTML = today;
console.log(today)

function slotCol(){
    if(moment().format('LT').substring(0,2)){

    }
}

//save button
$(".save").on("click", function() {
    //store user input
    var userIn = $(this).siblings(".event").val();
    //store time
    var userTime = $(this).parent().attr("id");
    //store to local storage
    localStorage.setItem(userIn, userTime);
})

//check hour 
function checkHour() {
    var curHour = moment().hour();
    //for each block
    $(".block").each(function (){
        var blockH = parseInt($(this).attr("id").split("hour")[1]);
        //check whether it is past present or future
        if (blockH < curHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockH === curHour){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }
    })
}

checkHour();

//check and load any local storage stuff
$("#hour9 .event").val(localStorage.getItem("hour9"));
$("#hour10 .event").val(localStorage.getItem("hour10"));
$("#hour11 .event").val(localStorage.getItem("hour11"));
$("#hour12 .event").val(localStorage.getItem("hour12"));
$("#hour13 .event").val(localStorage.getItem("hour13"));
$("#hour14 .event").val(localStorage.getItem("hour14"));
$("#hour15 .event").val(localStorage.getItem("hour15"));
$("#hour16 .event").val(localStorage.getItem("hour16"));
$("#hour17 .event").val(localStorage.getItem("hour17"));

