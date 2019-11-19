//演示数组
let list:number[] = [1,2,3];
let list01:string[] = ['Shaw','Hung'];
let list02:Array<number> = [1,2,3];


list[3]= 2;
console.log(list[3]);

console.log(list[1]);
console.log(list01[0]);
console.log(list02[1]);

//演示元组
let x:[string,number,string] = ['Shaw',10086,'Hung'];
console.log(x[1]);


//演示枚举

//1.普通模式（从0开始编号）
enum Name {Shaw,Hung};
let S:Name = Name.Shaw;
console.log(S);

//2.自己编号
enum Name{Xiao = 1,Huang = 4}
let X:String= Name[4];
console.log(X);
