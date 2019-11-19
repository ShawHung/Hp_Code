class Queue{
    constructor(items){
        this.queue = items || []
    }
    enQueue(element){
        this.queue.push(element)
    }
    deQueue(){
        this.queue.shift();
    }
    front(){
        return this.queue[0]
    }
    getSize(){
        return this.queue.length
    }
    isEmpty(){
        return !this.getSize()
    }
    print(){
        console.log(this.queue.toString())
    }
    clear(){
        this.queue = []
    }
}