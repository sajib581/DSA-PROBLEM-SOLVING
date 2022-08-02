class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DbLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    //push
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            // this.tail.next = null
        }
        this.length++;
        return this;
    }
    //remove item from the end
    pop(){
        if(!this.head)return null
        let temp = this.tail;
        if(this.length === 1){
            this.head = null
            this.tail = null            
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null
        }
        this.length--
        return temp
    }
    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }        
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return nulll
        const temp = this.head;
        this.head = this.head.next;
        if(this.head ){
            this.head.prev = null;
        }
        temp.next = null
        this.length--
        return temp
    }
    //Finding item at specific index
    get(index){
        if(index<0 || index >= this.length) return null
        let temp = this.head;
        if(index < this.length/2){
            for (let i = 0; i < index ; i++) {
                temp = temp.next ;
            }
        }else{
            temp = temp.next
            for (let i = this.length-1; i >= index ; i--) {
                temp = temp.next ;
            }
        }
        return  temp
    }
    //Setting Value at specific Item
    set(index, value){
        const temp = this.get(index);
        if(temp){
            temp.value = value
            return true
        }
        return false
    }
    //insert intem at specific index
    insert(index, value){
        if(index < 0 || index> this.length) return false
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        const newNode = new Node(value)
        const before = this.get(index-1)
        const after = this.get(index + 1)
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return this

    }
    //Remove index at specific index
    remove(index){
        if(index < 0 || index >= this.length)return false
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let temp = this.get(index)
        if(this.length > 1){
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev
        }else{
            this.head = null;
            this.tail = null;
        }
        temp.prev = null
        temp.next = null 
        this.length--
        return temp ;

    }
}

const dbLinkedList = new DbLinkedList(10)
dbLinkedList.push(100)
dbLinkedList.push(200)
// console.log(dbLinkedList);
// dbLinkedList.pop()
dbLinkedList.unshift(20)
dbLinkedList.unshift(25)
console.log(dbLinkedList);
// dbLinkedList.shift()
console.log(dbLinkedList.get(3));
// console.log(dbLinkedList);

//41 15