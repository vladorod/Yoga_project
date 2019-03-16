window.addEventListener('DOMContentLoaded', () => { 
      
  "use scrict";

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

// Srcroll animation 

function animate(options) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    let progress = options.timing(timeFraction)
    
    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}


let a = document.querySelectorAll('a[href="#"]');
  

 
  // a.addEventListener('click', (e) => { 

  //   e.preventDefault();

  //   animate({
  //     duration: 1000,
  //     timing: function(timeFraction) {
  //       return Math.pow(timeFraction, 5);
  //     },
  //     draw: function(progress) {
  //      scrollTo(document.querySelector(href).getBoundingClientRect().top)
  //     }
  // });
    
  // });
  
 
});


let arr = document.querySelectorAll('ul a[href]');

for (var i = 0; i < arr.length; i++) {

  console.log('asd')
  }
