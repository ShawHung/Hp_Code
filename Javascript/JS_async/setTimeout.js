//1.setTimeOut第一个参数为代码片段。
function setTime_one(){
    console.log("I'm the first one!")
}

setTimeout(eval(function(){
    console.log("setTimeout_one,later...shawhung")
}),1000);
setTime_one();

    //第二个参数（delay）不传递默认为0
    setTimeout(eval(function(){
        console.log("no delay,setTimeout_one,later...shawhung")
    }));

//2.setTimeOut第一个参数为函数。
function setTime_two(){
    console.log("I'm the second one!")
}

    //1）、直接将函数写在setTimeOut内
    setTimeout(function(){
        console.log("setTimeout_two,later...")
    },1000);

    //第二个参数（delay）不传递默认为0
    setTimeout(function(){
        console.log("no delay,setTimeout_two,later...")
    });

    //2)、传函数名
    function laterFunc(){
        console.log("setTimeout_three,later...,but i have name.")
    }
    function laterFunc_noDelay(){
        console.log("no delay,setTimeout_three,later...,but i have name.")
    }
    setTimeout(laterFunc,1000);

    //第二个参数（delay）不传递默认为0
    setTimeout(laterFunc_noDelay);
setTime_two();

//若函数为对象方法，需要绑定this,setTimeOut会改变对象方法this指向全局对象。
var x = "I'm in window Object!"
var obj = {
    x:"I'm in Object obj",
    func:function(){
        console.log(this.x);
    }
}

//不绑定this
setTimeout(obj.func,1000);

//匿名函数体内调用obj.func，绑定this。
setTimeout(function(){obj.func();console.log("func this...")},1000);

//使用bind绑定this
setTimeout(obj.func.bind(obj),1000);

//delay后传入参数作为回调函数参数
function argsFunc(...args){
    console.log([...args]);
};
setTimeout(argsFunc,1000,1,2,3,4,5,6);


//演示无限次指定间隔执行函数
var timerFlag = 0;
var timer =setTimeout(function func(){
  timerFlag++;
  console.log("timerFlag:"+timerFlag);
  setTimeout(func,2000);
},2000)
clearTimeout(timer);

