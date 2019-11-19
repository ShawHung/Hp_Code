//1.定义变量时赋值后不可更改变量类型
function hello() {
    let str = 'string';
    //str = 4;报错
    console.log(str);
}
//
hello();
//上式等价于
function hello1() {
    let str = 'string';
    //不可更改变量类型
    console.log(str);
}
hello1();
//2.变量声明时为赋值则被推断成any类型，就可以进行后续赋值。
function hello2() {
    let str;
    str = 1;
    console.log(str);
    str = "hello";
    console.log(str);
}
hello2();
//# sourceMappingURL=Type_reference.js.map