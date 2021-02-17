function Robot(){
    Robot.prototype.work1 = function(){
        console.log("I'm working");
    };
    this.work = function(){
        console.log("I'm working");
    };
}
function CoffeRobot(){
    Robot.call(this);
    CoffeRobot.prototype = Object.create (Robot.prototype);
    CoffeRobot.prototype.constructor = CoffeRobot;
    this.work = function(){
        console.log("I'm making coffee");
    };
    CoffeRobot.prototype.work1 = function(){
        console.log("I'm making coffee");
    };
}
function RobotCoocker(){
    RobotCoocker.prototype = Object.create (Robot.prototype);
    RobotCoocker.prototype.constructor = RobotCoocker;
    Robot.call(this);
    CoffeRobot.prototype.work1 = function(){
        console.log("I'm coocking");
    };
    this.work = function(){
        console.log("I'm coocking");
    };
}
function RobotDancer(){
    RobotDancer.prototype = Object.create (Robot.prototype);
    RobotDancer.prototype.constructor = RobotDancer;
    Robot.call(this);
    RobotCoocker.prototype.work1 = function(){
        console.log("I'm dancing");
    };
    this.work = function(){
        console.log("I'm dancing");
    };
}
var CoffeRobot = new CoffeRobot();
var RobotCoocker = new RobotCoocker();
var RobotDancer = new RobotDancer();

