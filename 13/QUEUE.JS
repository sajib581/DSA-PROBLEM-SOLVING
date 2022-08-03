class Node{
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode 
        this.length = 1

    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++;
        return this
    }
    dequeue(){
        if(!this.first) return null
        let temp = this.first;
        if(this.length === 1){
            this.first = null
            this.last = null
        }else{
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }
}    

const queue = new Queue(2)
console.log(queue.enqueue(3));
console.log(queue.dequeue(3));

//Array as stack
[10,12,14,16]
//push, pop - O(1) -At the end
//Shift , unShift - O(n) -At the begining

//Array as queue
[10,12,14,16]
//Push - O(1)
//shift - O(n)
//Better use linked list to get performance better


