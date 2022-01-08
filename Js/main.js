let alarms = document.getElementsByClassName("alarmtoggle")
let hourHand = document.getElementById("hourHand")
let minuteHand = document.getElementById("minuteHand")


Array.from(alarms).forEach((alarm,index) => {
    alarm.addEventListener("click",function () {
        alarm.classList.toggle("active")
    })
});

clock = ()=>{
    let min = new Date().getMinutes() ;
    let actualmin = min * 6;
    minuteHand.style.transform = "rotate("+ actualmin +"deg)";
    let actualHour;
    let hour = new Date().getHours();
    if (hour>=12){
        actualHour = (hour-12)*30  + (min*(1/60));
    }
    else{
        actualHour = hour *30;
    }

    hourHand.style.transform = "rotate("+ actualHour +"deg)";
    
}

let t = setInterval(clock, 500);

let modes = document.getElementsByClassName("mode")
Array.from(modes).forEach((mode,index) => {
    mode.addEventListener("click",function () {
        let current = document.getElementsByClassName("activemode")
        current[0].classList.remove("activemode");
        mode.classList.add("activemode")
    })
});


let settings = document.querySelector("#settings ion-icon");
settings.addEventListener('click',()=>{
    settings.classList.add('rotate-scale-down')
    setTimeout(() => {
        
        settings.classList.remove('rotate-scale-down')
    }, 2000);


})

