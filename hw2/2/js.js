employeeSalaries = {
    andrew: 500,
    thomas: 250,
    paul: 310
}
for(key in employeeSalaries){
    console.log(key + " " + employeeSalaries[key]);
    if(employeeSalaries==0){
        console.log("Object is empty");
    }
}