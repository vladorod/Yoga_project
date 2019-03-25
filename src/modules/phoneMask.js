function phoneMask() { 
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

function limit() {
    String.prototype.limit = function (num) {
      let arr = this.toString(),
        arrNew = [];
      for (let i = 0; i < num; i++) {
        arrNew.push(arr[i]);
      }
      return arrNew.join('');
    }
  }
  
}

module.export = phoneMask();