var time=0;
var countLap=1;
var isClockRunning=false;
var intervalId;

$("#start").click(start);
$("#stop").click(stop);
$("#reset").click(reset);
$("#lap").click(recordLap);



function  start(){
    if(!isClockRunning){
        intervalId =setInterval(count,1000);
        isClockRunning= true;
}
}    

function count(){

    time++;
    var converted=timeConverter(time);  //Get the current time, pass that into the timeConverter function
    $("#display").text(converted);

}

function stop(){
    clearInterval(intervalId);     //Use clearInterval to stop the count here
    isClockRunning= false;
}

function reset(){

    time=0;
    countLap=1;
    $("#display").text("00:00");  // Change the "display" div to "00:00."
    $("#laps").text("");
}

function recordLap(){

    var converted=timeConverter(time);
    $("#laps").append("<p>lap"+countLap +":"+ converted+"</p>");
    countLap++;
}
    
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
    seconds = "0" + seconds;
    }

    if (minutes === 0) {
    minutes = "00";
    }
    else if (minutes < 10) {
    minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}