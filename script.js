let date = new Date(0, 0, 0, 0, 0, 0);
let counter = document.getElementsByClassName('counter')[0];
let intervalId = null;

function startWatch() {
    if (intervalId !== null) return; // Prevent multiple intervals

    intervalId = setInterval(() => {
        date.setSeconds(date.getSeconds() + 1);

        if (date.getSeconds() == 0) {
            date.setMinutes(date.getMinutes() + 1);
        }

        if (date.getMinutes() == 0 && date.getSeconds() == 0) {
            date.setHours(date.getHours() + 1);
        }

        let timenow = date.toTimeString().split(' ')[0];
        counter.innerText = timenow;
    }, 1000);
}

function stopWatch() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

let btn1 = document.getElementById("start");
btn1.addEventListener("click", startWatch);

let btn2 = document.getElementById("stop");
btn2.addEventListener("click", stopWatch);

//reset
let btn3 = document.getElementById("reset");
btn3.addEventListener("click", () => {
    date = new Date(0, 0, 0, 0, 0, 0);
    counter.innerText = "00:00:00";
    stopWatch();
})

//gettime
let btn4 = document.getElementById("gettime");
let stampscon = document.getElementsByClassName('stampscon')[0];
btn4.addEventListener("click", () => {
    let timenow = date.toTimeString().split(' ')[`0`];
       let li = document.createElement('li');
        li.innerText = timenow;
        stampscon.appendChild(li);
})

//clear
let btn5 = document.getElementById("cleartime");
btn5.addEventListener("click", () => {
    stampscon.innerHTML = "";
})