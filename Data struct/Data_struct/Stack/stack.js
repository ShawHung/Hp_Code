class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        //入栈
        this.stack.push(element)
    }
    pop(){
        //出栈
        this.stack.pop()
    }
    peek(){
        //获取栈顶元素
        return this.stack[this.getCount()-1]
    }
    getCount(){
        //获取栈的大小
        return this.stack.length
    }
    isEmpty(){
        //判断栈是否为空
        return this.getCount() === 0
    }
    clear(){
        //清空栈
        this.stack = []
    }
    print(){
        //打印栈
        console.log(this.stack.toString())
    }
}
