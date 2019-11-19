//定义一对值分别为string和number的元组
let shaw = ['shaw', 1];
//可以访问元组中正确索引位置的值
console.log(shaw[0]);
console.log(shaw[1]);
// console.log(shaw[2]);//超出元组定义范围报错
//可只对元组赋值一项
shaw[0] = 'shaw';
//直接对元组赋值需要提供所有项
// shaw = [22]//报错，因为未提供所有项
//添加越界元素，被限制位元组定义时的联合类型
shaw.push('hung');
shaw.push(1);
console.log(shaw);
// shaw.push(true)报错，true是boolean类型，不是string和number类型。
//# sourceMappingURL=Tuple.js.map