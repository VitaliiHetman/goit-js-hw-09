import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');

const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

const defaultDate = new Date();
// console.log(input);
startBtn.disabled = true;
const options = {
  dateFormat: 'Y-m-d H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= defaultDate) {
      window.alert('Please choose a date in the future');
    }
    if (selectedDates[0] > defaultDate) {
      startBtn.disabled = false;
    }
 
  },
};


flatpickr('#datetime-picker', options);
let date
input.addEventListener('input', e => {
  e.preventDefault();
  const selectDate = e.target.value;
   date = Date.parse(selectDate);
  const ms = date - defaultDate.getTime();

 
});

startBtn.addEventListener('click', e => {
    const intervalId=setInterval(()=>{
       const result = date - new Date()
if(result<=0){
    clearInterval(intervalId)
    return
}
       convertMs(result)
        }, 1000)
})



function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    daysTimer.textContent = String(days).padStart(2,"0");
    const hours = Math.floor((ms % day) / hour);
    hoursTimer.textContent =String(hours).padStart(2,"0");
    const minutes = Math.floor(((ms % day) % hour) / minute);
    minutesTimer.textContent = String(minutes).padStart(2,"0");
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    secondsTimer.textContent = String(seconds).padStart(2,"0");
    return { daysTimer, hoursTimer, minutesTimer, secondsTimer };
  }