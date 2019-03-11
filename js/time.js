     window.addEventListener('DOMContentLoaded', () => { 
      "use scrict";

      function getTime ( ) { 
        let d = new Date(),
            root = document.querySelector('#root');
        root.innerHTML = `${addZero(d.getHours())} : ${addZero(d.getMinutes())} : ${addZero(d.getSeconds())}`;
    }
    setInterval(getTime, 2);
    
    function addZero(i) { 
        if (i<10) { 
            i = "0" + i;
        }
    return i 
    }
});

