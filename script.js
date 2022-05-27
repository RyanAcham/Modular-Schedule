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
    var userIn = $(this).siblings(".description").val();
    //store time
    var userTime = $(this).parent().attr("id");
    //store to local storage
    localStorage.setItem(userIn, userTime);
})

//check hour 
function checkHour() {
    var curHour = moment().hour();
    //for each block
    $(".time-block").each(function (){
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
$("#hour9am .description").val(localStorage.getItem("hour9am"));
$("#hour10am .description").val(localStorage.getItem("hour10am"));
$("#hour11am .description").val(localStorage.getItem("hour11am"));
$("#hour12pm .description").val(localStorage.getItem("hour12pm"));
$("#hour13pm .description").val(localStorage.getItem("hour13pm"));
$("#hour14pm .description").val(localStorage.getItem("hour14pm"));
$("#hour15pm .description").val(localStorage.getItem("hour15pm"));
$("#hour16pm .description").val(localStorage.getItem("hour16pm"));
$("#hour17pm .description").val(localStorage.getItem("hour17pm"));

