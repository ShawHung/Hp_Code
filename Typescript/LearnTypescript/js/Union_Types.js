//1.使用"|"来分隔每个类型
let myFavorite1;
myFavorite1 = 'hello';
console.log(myFavorite1);
myFavorite1 = 1;
console.log(myFavorite1);
myFavorite1 = true;
console.log(myFavorite1);
//2.只能访问联合类型的共有属性
function attr(sth) {
    return sth.toString();
}
console.log(attr('hello'));
//3.联合类型被赋值时会被类型推断出类型，访问不属于该类型的属性会报错
let myFavorite2;
myFavorite2 = 'hello';
console.log(myFavorite2.length);
myFavorite2 = 5;
//console.log(myFavorite2.length)访问不存在的属性报错
//# sourceMappingURL=Union_Types.js.map