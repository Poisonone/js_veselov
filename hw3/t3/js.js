function find(arr, value) {
    let i=0;
    while(i < arr.length){
        if(arr[i] == value){  
            return i
        }
        i++                          
    }
    return -1;                       
}