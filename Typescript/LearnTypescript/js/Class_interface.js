let Shaw = {
    name: 'Shaw',
    age: 22 //少了也会报错
    //不允许多一个属性或者少一个属性
    //job:'IT Engineer'（多了会报错）
};
console.log(Shaw.name);
console.log(Shaw.age);
let Hung = {
    name: "hung",
};
console.log(Hung);
let Wang = {
    name: "Wang",
    age: 22,
};
console.log(Wang);
let ShawHung = {
    name: "Shaw",
    age: 22,
    job: 'xxx',
    Love: true
};
console.log(ShawHung);
let XiaoWang = {
    name: "XiaoWang",
    // age:33,报错。33不是string类型
    job: "xxx",
    // Love:true,报错，因为true不是string类型
    who: null //不报错，null是string的子集
};
console.log(XiaoWang);
//# sourceMappingURL=Class_interface.js.map