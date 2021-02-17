var arr1 = [2,1,5,3,10,-2,15,34,13];
function sortUP(a,b){
    return b-a;
}
function sortDown(a,b){
    return a-b;
}
arr1.sort(sortUP);
console.log(arr1);
arr1.sort(sortDown);
console.log(arr1);