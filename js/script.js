 window.addEventListener('DOMContentLoaded', () => {

  "use strict";

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');
  
  function hideTabContent(a) { 
      for (let i = a; i < tabContent.length; i++ ) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
  }
  
  function showTabContent(b) { 
      if ( tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
  }

  hideTabContent(1);
  info.addEventListener('click', (e) => { 
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) { 
        for (let i = 0; i < tab.length; i++) {
             if ( target == tab[i]) { 
                hideTabContent(0);
                showTabContent(i);
                break;
             }
        }
    }
  }) 

// Modal 

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', () => {
  showModal(true)
});


// button modal in tab

let descriptionBtn = document.querySelectorAll('.description-btn');

descriptionBtn.forEach( function (item,i,arr) { 
  arr[i].addEventListener('click', () => {
    showModal(true);
  });
});


function showModal(openOrClose) { 
  if ( openOrClose ) { 
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
    more.classList.add('more-splash');
  } else { 
     overlay.style.display = 'none';
     more.classList.remove('more-splash');
     document.body.style.overflow = '';
  }
  close.addEventListener('click', () => { 
    showModal(false);
  });

} 

// Check phone (MASK)

let inputPhoneAll = document.querySelectorAll("input[type='tel']");
inputPhoneAll[0].value = "";
inputPhoneAll[1].value = "";

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
    } 
}


inputPhoneAll[0].addEventListener("input", (e) => {
  
  inputPhoneAll[0].defaultValue = "+7(   )   -  -  ";  
    let matrix = inputPhoneAll[0].defaultValue,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = inputPhoneAll[0].value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
  matrix = matrix.replace(/[ \d]/g, function(a) {
    return val.charAt(i++) || " ";
  });
  if ( val.length < 12 ) {
    inputPhoneAll[0].value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != inputPhoneAll[0].defaultValue ? i++ : i = matrix.indexOf(" ");
    setCursorPosition(i, inputPhoneAll[0]);
  } else { 
    inputPhoneAll[0].value = matrix.limit(16);
  }
}, false);

inputPhoneAll[1].addEventListener("input", (e) => {
  
  inputPhoneAll[1].defaultValue = "+7(   )   -  -  ";  
    let matrix = inputPhoneAll[1].defaultValue,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = inputPhoneAll[1].value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
  matrix = matrix.replace(/[ \d]/g, function(a) {
    return val.charAt(i++) || " ";
  });
  if ( val.length < 12 ) {
    inputPhoneAll[1].value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != inputPhoneAll[1].defaultValue ? i++ : i = matrix.indexOf(" ");
    setCursorPosition(i, inputPhoneAll[1]);
  } else { 
    inputPhoneAll[1].value = matrix.limit(16);
  }
}, false);


//From

let form1 = document.querySelector('.main-form'),
    form2 = document.querySelector('#form');


sendForm(form1, 'server.php');
sendForm(form2, 'server.php');


function sendForm(form, url = 'http://127.0.0.1:3000/call'){ 
  let massage = { 
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжимся!',
    failure: 'Что-то пошло не так...'
  };

  let input = form.querySelectorAll('input'),
  statusMassage = document.createElement('div');
  statusMassage.classList.add('status');


  form.addEventListener('submit', (e)=> { 

    e.preventDefault();
    form.appendChild(statusMassage);
  
    console.log(form.name);

    let fromData = new FormData(form);
    
    let obj = {};
  
    fromData.forEach((value,key) => {
      obj[key] = value;
    });
    console.log(obj)
    let json = JSON.stringify(obj);
    console.log(json)

    postFrom(json,url)
    .then(() => statusMassage.innerHTML = massage.loading)
    .then(() => { statusMassage.innerHTML = massage.success;})
    .catch(() => { 
      statusMassage.innerHTML = massage.failure;
    })
    .then(clearInputAll)
  });
};

function postFrom (data,url) { 
  return new Promise ((resolve,reject) => { 
    let req = new XMLHttpRequest();
    req.open("POST", url);
    req.setRequestHeader('Content-Type','application/json; charset=utf-8');
    req.onreadystatechange = () => { 
    if (req.readyState < 4) { 
      resolve();
    } else if (req.readyState === 4) { 
        if (req.status == 200 && req.status < 5) { 
          resolve();
      } else { 
          reject();
      }
    } 
  };
  req.send(data)
});
}
//end 

function clearInputAll() { 
  let input = document.querySelectorAll('input')
  for(let i = 0; i < input.length; i++) { 
    input[i].value = "";
  }
}

});
