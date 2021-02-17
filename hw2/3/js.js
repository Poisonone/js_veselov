function divide(a,b){
    return a/b;
}
let x = prompt("Enter a:");
let y = prompt("Enter b:");
try {
    console.log(divide(x,y));
  } catch (e) {
    if (y==0) throw "it can't be 0";
  }
  finally{
    if (y==0) throw "it can't be 0";
  }