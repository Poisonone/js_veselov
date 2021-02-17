var arr = ["Jazz","Blues"];
arr.push('Rock-n-roll');
arr.splice(-2,1,"classic");
var removed = arr.shift();
console.log(removed);
arr.unshift("Rap","Reggy");
console.log(arr);
