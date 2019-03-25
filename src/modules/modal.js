
function modal() { 

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', () => {
  showModal(true);
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

}

module.exports = modal;