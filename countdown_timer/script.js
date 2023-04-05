// 
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// (Expired) -  date we're counting down to !
const newYears = "1 Jan 2024";
// the main function to calculate days and hours ..;
function countDown(){
    // Expired date !
    const newYearsDate = new Date(newYears);
    // today's date
    const currentDate = new Date();
    //distance between now and the count down date
    const distance = (newYearsDate - currentDate)/1000;
    //Time calculations for days, hours, minutes and seconds
    // const day = 24*60*60*1000;
    // const days = Math.floor(distance/day);
    // const hour =60*60*1000;
    // const hours = Math.floor(distance%(day/hour));
    // const minute = 60*1000;
    // const minutes = Math.floor(distance%(hour/minute));
    // const second = 1000;
    // const seconds = Math.floor(distance%(minute/second));
    //
    //const day = 24*60*60*1000;
    const days = Math.floor(distance/3600/24);
    //const hour =60*60*1000;
    const hours = Math.floor(distance/3600)%24;
    //const minute = 60*1000;
    const minutes = Math.floor(distance/60)%60;
    //const second = 1000;
    const seconds = Math.floor(distance)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
}
// Initial call 
countDown();
setInterval(countDown,1000);