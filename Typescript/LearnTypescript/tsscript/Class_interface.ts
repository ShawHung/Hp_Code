//1.使用接口定义对象类型
interface Person{
    name:string;
    age:number;
}

let Shaw:Person={
    name:'Shaw',
    age:22//少了也会报错
    //不允许多一个属性或者少一个属性
    //job:'IT Engineer'（多了会报错）
}

console.log(Shaw.name);
console.log(Shaw.age);


//2.可选属性
interface Person1{
    name:string;
    age?:number;
}

let Hung:Person1={
    name:"hung",
    //age属性省略不报错
    //job:"xxx"未声明的属性会报错
}
console.log(Hung);



let Wang:Person1={
    name:"Wang",
    age:22,
}
console.log(Wang);



//3.任意属性
interface Person2{
    name:string;
    age:number;
    [propName:string]:any;
}

let ShawHung:Person2={
    name:"Shaw",
    age:22,
    job:'xxx',
    Love:true
}
console.log(ShawHung);

//但是定义了任意属性后，已定义的确定属性和可选属性都必须是该任意属性类型的子集。
interface Person3{
    name:string;
    //age?:number;报错
    job:string;
    [propName:string]:string;
}

let XiaoWang:Person3 = {
    name:"XiaoWang",
    // age:33,报错。33不是string类型
    job:"xxx",
    // Love:true,报错，因为true不是string类型
    who:null//不报错，null是string的子集
}

console.log(XiaoWang);

