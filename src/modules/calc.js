function calc() {

  let presons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.querySelector('#select'),
    totalValue = document.querySelector('#total'),
    presonsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  presons.addEventListener('input', function (e) {
    if (this.value != "" && this.value != 0) {
      this.value = this.value.replace(/\D/g, "");
      presonsSum = this.value;
      total = (+daysSum + +presonsSum) * 4000;
      if (restDays.value != '' && restDays.value != 0) {
        totalValue.innerHTML = total;
      } else totalValue.innerHTML = 0;
    } else totalValue.innerHTML = 0;
  });

  restDays.addEventListener('input', function (e) {
    if (this.value != "" && this.value != 0) {
      this.value = this.value.replace(/\D/g, "");
      daysSum = this.value;
      total = (+daysSum + +presonsSum) * 4000;
      if (presons.value != '' && presons.value != 0) {
        totalValue.innerHTML = total;
      } else totalValue.innerHTML = 0;
    } else totalValue.innerHTML = 0;
  });

  place.addEventListener('change', function () {
    if (presons.value !== "" && restDays.value !== "" && presons.value != "0" && restDays.value != "0") {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    } else totalValue.innerHTML = 0;
  });
}

module.exports = calc;