// Initialize alarm sound
const alarmAudio = document.getElementById("alarm-audio");
alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
alarmAudio.load();



const getTimeString = ({ hours, minutes, seconds, zone }) => {

    return `${hours}:${minutes}:${seconds} ${zone}`;
};

let alarmString = null;

function get_zero(digit) {
    if (digit < 10) {
        return '0' + digit.toString();
    } else {
        return digit.toString();
    }
}

// function to set and reset


const set = document.getElementById('set');
const reSet = document.getElementById('reset');
const alarmAction = document.getElementById('formAction');


// Select DOM element of active alarm container
let activeAlarm = document.getElementById('active-alarm');


// Select DOM element of active alarm text
let alarmTextContainer = document.getElementById('alarm-text');


const handleSubmit = (event) => {
    // Prevent default action of reloading the page
    event.preventDefault();

    //taking the input from user

    let input_hour = document.getElementById('user_hours').value;
    let input_minute = document.getElementById('user_minutes').value;
    let input_second = document.getElementById('user_seconds').value;
    let select = document.getElementById('zone');
    let input_option = select.options[select.selectedIndex].value;

    console.log(input_option);




    /*     alarmString = {
            hours: get_zero(input_hour),
            minutes: get_zero(input_minute),
            seconds: get_zero(input_second),
            zone: input_option
        }; */


    alarmString = getTimeString({
        hours: get_zero(input_hour),
        minutes: get_zero(input_minute),
        seconds: get_zero(input_second),
        zone: input_option
    })

    console.log(alarmString);



    // hide alarm form
    alarmAction.style.display = "none";

    // show active alarm with text

    activeAlarm.style.display = "block";
    alarmTextContainer.innerHTML = `Alarm is set at ${alarmString.hours}:${alarmString.minutes}:${alarmString.seconds}:${alarmString.zone}`;


}


set.addEventListener('click', handleSubmit);
reSet.addEventListener('click', () => {
    //reset the value
    alarmAction.reset();

    // show the alarm form

    alarmAction.style.display = "block";

    // hide active alarm with text

    activeAlarm.style.display = "none";


})


let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let zone = document.getElementById('zones');
setInterval(() => {
    let date = new Date;

    let Hour = date.getHours();
    let convertedZone = Hour >= 12 ? "PM" : "AM";
    if (Hour > 12) {
        Hour = Hour % 12;
    }
    hour.innerHTML = get_zero(Hour);
    minutes.innerHTML = get_zero(date.getMinutes());
    seconds.innerHTML = get_zero(date.getSeconds());
    zone.innerHTML = convertedZone;


    // creating an object 
    timeString = getTimeString({
            hours: get_zero(Hour),
            minutes: get_zero(date.getMinutes()),
            seconds: get_zero(date.getSeconds()),
            zone: convertedZone

        })
        //calling the alarm by checking required condition
    checkAlarm(timeString);



}, 1000);


//function to check if alarm needs to be triggered 
function checkAlarm(input) {
    console.log(alarmString);
    console.log(input);
    if (alarmString === input) {
        alarmAudio.play();
    }
}