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
    var converted=timeConverter(time);
    $("#display").text(converted);

}

function stop(){
    clearInterval(intervalId);
    isClockRunning= false;
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