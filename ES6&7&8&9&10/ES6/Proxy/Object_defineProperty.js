//object.defineProperty()方法可以用来定义对象属性
function defineReactive(data,key,value){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function defineGet(){
            console.log(`get key:${key} and value ${value}`)
            return value
        },
        set:function defineSet(newvalue){
            console.log(`set key:${key} and value ${value}`)
            value = newvalue
        }
    })
}

function observe(data){
    Object.keys(data).forEach((key)=>defineReactive(data,key,data[key]))
}


