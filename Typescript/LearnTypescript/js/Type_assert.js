// function getLength(sth:string | number):number{
//     return sth.length //报错，联合类型number上不存在length属性
// }
//使用类型断言
//写法一（<类型>值）
function getLength(sth) {
    if (sth.length) {
        return sth.length;
    }
    else {
        return sth.toString().length;
    }
}
//写法二（值 as 类型）
function getLen(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//# sourceMappingURL=Type_assert.js.map