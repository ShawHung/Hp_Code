//IIFE模式

(function(window){
    let data = "Hello World ";

    function foo(){
        console.log(`foo()${data}`);
    }
    function bar(){
        console.log(`bar()${data}`);
    }

    function otherfunc(){
        console.log(`otherFunc()`);
    }

    window.myModule = {foo,bar};
})(window);

