
var isValid = function(s){
    let stack = [];
    let map = {
        '(':-1,
        ')':1,
        '[':-2,
        ']':2,
        '{':-3,
        '}':3
    }

    for(let i =0;i<s.length;i++){
        if(map[s[i]] < 0){
            stack.push(s[i])
        }else{
            let last = stack.pop()
            if(map[last] + map[s[i]] !== 0) return false
        }
    }
    if(stack.length > 0){
        return false
    }
    return true
}



