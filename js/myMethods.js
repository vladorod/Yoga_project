String.prototype.limit = function (num) {
  let arr = this.toString(),
      arrNew = [];
 for(let i = 0;  i < num; i++){
   arrNew.push(arr[i]);
 }
 return arrNew.join('');
}