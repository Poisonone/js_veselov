object = {
    
};
object.name = "David";
object.surname = "Logos";
delete object.name;
for(key in object){
    console.log(key+" " + object[key]);
}