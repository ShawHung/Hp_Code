//演示数组
var list = [1, 2, 3];
var list01 = ['Shaw', 'Hung'];
var list02 = [1, 2, 3];
list[3] = 2;
console.log(list[3]);
console.log(list[1]);
console.log(list01[0]);
console.log(list02[1]);
//演示元组
var x = ['Shaw', 10086, 'Hung'];
console.log(x[1]);
//演示枚举
//1.普通模式（从0开始编号）
var Name;
(function (Name) {
    Name[Name["Shaw"] = 0] = "Shaw";
    Name[Name["Hung"] = 1] = "Hung";
})(Name || (Name = {}));
;
var S = Name.Shaw;
console.log(S);
//2.自己编号
(function (Name) {
    Name[Name["Xiao"] = 1] = "Xiao";
    Name[Name["Huang"] = 4] = "Huang";
})(Name || (Name = {}));
var X = Name[4];
console.log(X);



