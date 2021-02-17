let right = false;
while(right==false){
    let answer = prompt("5+10=:");
    if(answer!=15){
        console.log("U should think more about it");
        right=false;
    }
    else{
        console.log("U r right!");
        right=true;
    }
}