//Linked List 
// push - O(1)
// pop - O(n)

// shift - O(1)
// unshift - O(1)

class Node{
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return undefined
        let temp = this.top
        this.top = temp.next;
        temp.next = null
        this.length--
        return temp;
    }
    peek(){
        const temp = this.pop();
        this.push(temp);
        return temp
    }
}

const stack = new Stack(1)
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());


