//1.boolean类型
let bool = false;
if (bool) {
    console.log("No Way!");
}
else {
    console.log("Yes");
}
//2.number类型
let bun = 123;
console.log(bun);
//3.string类型
let str = `我今天上班了${bun}分钟`;
console.log(str);
//4.空值void,可以用来表示没有返回值的函数，给一个变量声明为void类型只能赋值为null或者undefined
function alertName() {
    alert("shawhung");
}
;
let v = undefined;
console.log(v);
//null和undefined，是所有其它类型的子类型，可以将其赋值给其他类型，而void不可以
let u;
let num1 = 2;
console.log(num1);
//# sourceMappingURL=Bacic_Type.js.map