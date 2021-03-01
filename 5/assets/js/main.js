function UpdateTime(){
    time = new Date();
    secondHolder.innerHTML = time.getSeconds();
    hourHolder.innerHTML = time.getHours();
    if(parseInt(time.getMinutes()) < 10){
        minutesHolder.innerHTML = "0" + time.getMinutes();
    }
    else{
        minutesHolder.innerHTML = time.getMinutes();
    }

    circle.style.strokeDashoffset = 1000 - (1000*time.getSeconds()*(100/63)) /100;
}

const secondHolder = document.getElementById('seconds');
const minutesHolder = document.getElementById('minutes');
const hourHolder = document.getElementById('hour');
const circle = document.getElementById('filling-circle');
let time;

UpdateTime();
setInterval(UpdateTime, 1000);



