function calc () { 
    
  let presons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.querySelector('#select'),
      totalValue = document.querySelector('#total'),
      presonsSum = 0,
      daysSum = 0,
      total = 0;
  
  totalValue.innerHTML = 0;
  
  presons.addEventListener('input', function (e) {
    if ( this.value != ""){
    this.value = this.value.replace(/\D/g, "");
    presonsSum= this.value; 
    total = (+daysSum + +presonsSum)*4000;
    if (restDays.value != '') {
      totalValue.innerHTML = total;
    } else totalValue.innerHTML = 0;
  } else totalValue.innerHTML = 0;
  });
  
  restDays.addEventListener('input', function (e) {
    if ( this.value != ""){
    this.value = this.value.replace(/\D/g, "");
    daysSum=this.value;
    total  = (+daysSum + +presonsSum)*4000;
    if (presons.value != '') {
      totalValue.innerHTML = total;
    } else totalValue.innerHTML = 0;
  } else totalValue.innerHTML = 0;
  });
  
  place.addEventListener('change', function() {
    if (presons.value !== "" && restDays.value !== "") { 
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
  
}

module.exports = calc;