// class Person{
//     constructor(leg, arm){
//         this.leg = leg;
//         this.arm = arm;
//     }
//     eye = 2
//     walk(){
//         console.log("is walking");
//     }
// }

// const sajib = new Person(2,2)
// console.log(sajib);

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    //adding node at the end of the llinkedList
    //Time Complexity O(1)
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    //adding node at the begining
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode
        }    
        this.length++
    }

    //remove from the begining
    //Time Complexity O(1) 
    shift(){
        if(!this.head)return null
        const temp = this.head;
        this.head = this.head.next
        temp.next = null;
        this.length-- ;

        if(this.length === 0){
            this.tail = null ;
        }
        return temp;
    }

    //Remove from the Last
    //Time Complexity O(n)
    pop(){
        if(!this.head)return null
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //Find Item at specific index
    //Time Complexity O(n)
    get(index){
        if(index < 0 || this.index >= this.length)return null;
        let temp = this.head
        for(let i = 0; i<index; i++){
            temp = temp.next
        }
        return temp
    }
}

const linkedList = new LinkedList(10)
linkedList.push(11)
linkedList.unshift(12)
console.log(linkedList);
console.log(linkedList.get(1));