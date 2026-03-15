function showTime() {
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    if(hours<10){
        hours="0"+hours;
    }

    if(minutes<10){
        minutes="0"+minutes;
    }

    if(seconds<10){
        seconds="0"+seconds;
    }

    let time=hours+":"+minutes+":"+seconds;

    document.getElementById("time").innerText=time;
}
showTime();
setInterval(showTime,1000);