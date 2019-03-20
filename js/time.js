window.addEventListener('DOMContentLoaded', () => { 
      
  "use strict";

// Timer 

  let deadline = "2019-03-18";

function getTimeRemaining(endtime) { 

  let t = Date.parse(endtime) - Date.parse(new Date()),
      s = Math.floor((t/1000) % 60), 
      m = Math.floor((t/1000/60) % 60),
      h = Math.floor((t/(1000*60*60)));
  return { 
    "total" : t,
    "hours" : h,
    "minutes" : m,
    "seconds" : s,
  };
        
    
};

function setClock(id, endtime) { 

  let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      second = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000)
  
  function updateClock() {
    let t = getTimeRemaining(endtime);

    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    second.textContent = addZero(t.seconds);
    
    if (t.total <= 0) { 
      clearInterval(timeInterval);
      hours.textContent = "00";
      minutes.textContent = "00";
      second.textContent = "00";
    };
  };
};

function addZero(num) { 
  if ( num < 10 ) { 
    return num = '0' + num;
  } else return num; 
}

setClock("timer", deadline)

});
 