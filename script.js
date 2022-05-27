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

        }
        else if (blockH === curHour){

        }
        else{
            
        }
})

