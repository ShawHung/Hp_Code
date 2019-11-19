class PriorityQueue{
    constructor(){
        this.queue = []
    }
    enQueue(element,priority){
        let queueElement = {element ,priority}
        if(this.isEmpty()){
            this.queue.push(queueElement)
        }else{
            const preIndex = this.queue.findIndex((element) => queueElement.priority < element.priority)
            if(preIndex > -1){
                this.queue.splice(preIndex,0,queueElement)
            }else{
                this.queue.push(queueElement)
            }
        }
    }

    deQueue(){
        return this.queue.shift()
    }

    getHeader(){
        return this.queue[0]
    }

    getLength(){
        return this.queue.length
    }

    isEmpty(){
        return !this.getLength()
    }

    clearQueue(){
        this.queue = []
    }

    printQueue(){
       console.log(this.queue)
    }
}

let pq1 = new PriorityQueue()

pq1.enQueue('one',1)
pq1.enQueue('two',2)
pq1.enQueue('eight',8)
pq1.enQueue('seven',7)
pq1.enQueue('three',3)
pq1.enQueue('four',4)
pq1.enQueue('five',5)
pq1.deQueue()
console.log(pq1.getHeader());
console.log(pq1.getLength());
pq1.printQueue()
pq1.clearQueue()
pq1.printQueue()