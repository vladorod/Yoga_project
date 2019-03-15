window.addEventListener('DOMContentLoaded', () => { 
      
  "use scrict";

// Timer 

  let deadline = "2019-03-21";

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

    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    second.textContent = t.seconds;
    
    if (t.total <= 0) { 
      clearInterval(timeInterval);
    };
  };
};

setClock("timer", deadline)

});

