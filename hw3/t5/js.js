var arr = [2,-10,1,15,17,16];
// function sort1(a,b){
//     return a-b;
// }
// arr.sort(sort1);
// console.log(arr);
arr.forEach(function(item,i,arr){
    alert(i+" " + item  + " (array:" + arr + ")");
});
var pos = arr.filter(function(number){
    return number>0;
})
console.log(pos);
var namelenght = arr.map(function(name){
    return name.length;
});
console.log(namelenght);

var result = arr.reduce(function(sum,current){
    return sum+current;
},0);
