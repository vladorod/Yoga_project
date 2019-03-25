function slider () { 
    
let sliderindex = 1, 
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap =document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(sliderindex);

function showSlides(n) { 
  
  if ( n > slides.length) { 
    sliderindex = 1;
  } else if (n < 1) {
    sliderindex = slides.length;
  }

  slides.forEach( function (item) { item.style.display = 'none'; });
  dots.forEach(function (item) {item.classList.remove('dot-active'); });
  slides[sliderindex - 1 ].style.display = 'block';
  dots[sliderindex - 1].classList.add('dot-active');
}

function plusSlides(n) { 
  showSlides(sliderindex += n);
}

function currentSlides(n) { 
  showSlides(sliderindex = n);
}

prev.addEventListener('click', function() { 
plusSlides(-1);
});

next.addEventListener('click', function() { 
plusSlides(1);
});

dotsWrap.addEventListener('click', function(e) { 
for (let i = 0; i < dots.length+1; i++) { 
  if ( e.target.classList.contains('dot') && e.target == dots[i-1]) { 
    currentSlides(i);
  }
}
});

}

module.export = slider();