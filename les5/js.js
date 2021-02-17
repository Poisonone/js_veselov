function user(name){
    this.sayHI = function(){
        alert(name);
    };
    
}
let user = new user("John");
user.sayHI;