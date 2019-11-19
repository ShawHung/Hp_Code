//1.基本表示法，使用类型+[]表示数组
let arr1:number[] =[];
arr1.push(1,2,3,4,5);
console.log(arr1);
//在这里arr1中的元素只能是number类型否则报错。
//使用数组方法添加元素时也只能添加number类型。
// arr1.push("h")添加string类型报错。


//2.不常用方法，使用接口来表示数组
interface myArray {
    [index:number]:number;
}
let arr2:myArray = [1,2,3,4,5];
console.log(arr2);
//同样arr2的元素只能是接口规定的类型。但是此种表示数组的方法比较复杂，不常用。


//3.使用接口来表示类数组是常用的方法
 function sum(){
     let args: {
         [index:number]:number;
        length:number;
        callee:Function;
     } = arguments;//实际上就是Typescript的内置对象IArguments
 }

 //等同于
function sum1(){
    let args:IArguments = arguments;
}

//4.使用any定义数组使数组可以包含任意值
let arr3:any[] = [1,'h',true,undefined,null,{name:"shawhung"},[1,2,'h',{}]];
arr3.forEach((ele)=>console.log(ele)
);



