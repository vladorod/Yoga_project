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


});