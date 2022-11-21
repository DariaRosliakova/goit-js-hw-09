import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const refs = {
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]')
}
   
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const parseSelectedDate = Date.parse(selectedDates[0]);
    const timeToSelectedDate = (parseSelectedDate - Date.parse(options.defaultDate)); 
      if (timeToSelectedDate > 0) {
      startBtn.disabled = false;      
      let timer = timeToSelectedDate;
      convertMs(timer)
      startBtn.addEventListener('click', () => setInterval(() => { 
        if (timer > 0) {
          timer -= 1000;
          convertMs(timer)
          } 
        }
         , 1000))     
     }
     else {
      startBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
        convertMs(0)
   }  
  }
};

flatpickr(input, options)

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);    
  const hours = Math.floor((ms % day) / hour); 
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  refs.dataDays.textContent = addLeadingZero(days);
  refs.dataHours.textContent = addLeadingZero(hours);;
  refs.dataMinutes.textContent = addLeadingZero(minutes);;
  refs.dataSeconds.textContent = addLeadingZero(seconds);;
  return { days, hours, minutes, seconds }  
}

