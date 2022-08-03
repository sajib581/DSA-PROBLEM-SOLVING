class Node{
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.value = newNode
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
}    