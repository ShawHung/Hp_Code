// function getLength(sth:string | number):number{
//     return sth.length //报错，联合类型number上不存在length属性
// }

//使用类型断言
//写法一（<类型>值）
function getLength ( sth : string | number ):number{
    if((<string> sth).length){
        return (<string>sth).length
    }else{
        return sth.toString().length
    }
}

//写法二（值 as 类型）
function getLen (something: string|number):number{
    if((something as string).length){
        return (something as string).length
    }else{
        return something.toString().length
    }
}