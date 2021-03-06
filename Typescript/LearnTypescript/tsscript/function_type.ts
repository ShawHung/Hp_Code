//1.函数声明方式
function sumNum(x: number, y: number): number {
  return x + y;
}

console.log(sumNum(1, 2));
// console.log(sumNum(1,2,3));//多于声明参数个数报错。
// console.log(sumNum(1));//少于声明参数个数报错。

//函数表达式方式声明函数
let myFunc1: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
console.log(myFunc1(1, 3));
//同函数声明方式，多传参数少传参数都会报错。

//3.通过接口定义
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let func2: SearchFunc;
func2 = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};

console.log(func2("ShawHung", "Shaw"));

//4.可选参数
function name1(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
console.log(name1("shaw", "hung"));
console.log(name1("shaw")); //可以省略，但是参数不能多，必选参数不能少

//可选参数不能放在必选参数前
// function name1(lastName?:string,firstName:string),这样就不行

//5.默认参数

function name2(firstName: string, lastName: string = "shaw"): string {
  return firstName + " " + lastName;
}
console.log(name2("shaw", "hung"));
console.log(name2("shaw")); //可以省略，省略后参数为默认参数，但是参数不能多，必选参数不能少.
//此处默认参数就不受限制，可以放在必须参数前。

//6.剩余参数
function push(array: any[], ...items: any) {
  array.forEach(item => array.push(item));
}
let arr: any[] = [];

push(arr, 1, 2, 3, 4, 4, 5);
console.log(arr);
