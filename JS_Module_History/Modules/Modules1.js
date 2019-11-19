//1.全局模块模式（将功能封装为不同的全局函数）
function Header(){
    const h1 = document.createElement("h1");
    const body = document.getElementsByTagName('body')[0];
    h1.innerHTML = "我是标题1";
    body.appendChild(h1);
}

function Button(){
    //...
}

//该方法的缺点是污染全局命名空间

//2.namespace模式（将功能封装成对象。）
let myModule = {    
    data:"I love China",
    foo(){
        console.log(`foo() ${this.data}`);    
    },
    bar(){
        console.log(`bar() ${this.data}`);
    }
}
myModule.data = 'I love Wangyu',
myModule.foo();

//缺点是数据不安全，可以被外部修改



