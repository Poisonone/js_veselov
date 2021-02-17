var arr = [-2,10,-5,16,-3,100];
var pos = arr.filter(function(number){
    return number>0;
})
var neg = arr.filter(function(number){
    return number<0;
})
console.log(neg);
console.log(pos);