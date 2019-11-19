//1.函数声明方式

//参数必须与给定参数一致否则报错
function sum(x:number,y:number):number{
    return x+y;
}
console.log(sum(1,2));

//可选参数（必须在必须参数后）
function sayName(firstName:string,lastName?:string):string{
    return firstName + ' ' + lastName;
}
console.log(sayName('shaw','hung'));
console.log(sayName("xiao"));

//默认参数。
function sayAge(age:number=22,birth:number){
    return "Age:"+age +"\n"+"Birth:"+birth;
}
console.log(sayAge(23,34));
console.log(sayAge(undefined,33));

//剩余参数(...运算符)
function push(array:any[],...items:any[]){
    items.forEach(
        function(item){
            array.push(item);
        }
    )
}
console.log(push([],1,2,"shaw",{name:"shawhung"}));


//2.函数表达式方式声明
let mySum:(x:number,y:number) =>number = function(x:number,y:number){
    return x+y;
}
console.log(mySum(22,33));