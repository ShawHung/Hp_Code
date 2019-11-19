let flag = true;
let obj = {name:'shaw'};

function setState(obj){
    obj.name = 'hung';
    return obj;
}

flag?setState(obj):obj;

console.log(obj.name);