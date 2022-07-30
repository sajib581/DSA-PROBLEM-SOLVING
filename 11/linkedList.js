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
        if(index < 0 || index >= this.length)return null;
        let temp = this.head
        for(let i = 0; i<index; i++){
            temp = temp.next
        }
        return temp
    }
    //Inserting Items at specific Index
    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value;
            return true
        }
        return false
    }

    //Inserting node at specific index
    //Time complexity O(n)
    insert(index, value){
        //validate index
        if(index < 0 || index > this.length) return null
        //Inserting node at the begining
        if(index === 0) return this.unshift(value)
        //inserting node at the end
        if(index === this.length) return this.push(value)
        //now inserting in between
        const newNode = new Node(value)
        //Stoppping just before the index node 
        const temp = this.get(index-1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    //Removing a Node at specific index
    //Time Complexity O(n)
    remove(index){
        if(index<0 || index >= this.length) return false
        //removing from the begining
        if(index===0) return this.shift()
        //removing from the end
        if(index=== this.length-1) return this.pop()
        const prevRef = this.get(index-1)
        let temp = prevRef.next;
        prevRef.next = temp.next;
        temp.next = null
        this.length--
        return temp
    }
    //Reverse in the linkedList
    //Time Complexity O(n)
    reverse(){
        //Changing the head to tail, tail to head 
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp

        //Working with three pointer
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev
            prev = temp
            temp = next 
        }
    }
    
}

const linkedList = new LinkedList(10)
linkedList.push(11)
linkedList.push(12)
console.log(linkedList);
// console.log(linkedList.get(1));
// console.log(linkedList.set(1, 100) );

// console.log(linkedList.remove(1));
linkedList.reverse()
console.log(linkedList);



/*
            Array  vs Singly LinkedList
push    =>  O(1)        O(1)
pop     =>  O(1)        O(n)  
shift   =>  O(n)        O(1)  
unshift =>  O(n)        O(1)  
insert  =>  O(1)        O(1)  
remove  =>  O(n)        O(n)  
access  =>  O(1)        O(n)  
reverse =>  O(n)        O(n)
*/