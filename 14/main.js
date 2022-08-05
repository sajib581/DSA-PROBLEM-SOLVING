//Tree
//BT
//BST
//Heap
//priority Queue
//Hashtable
class Node {
    constructor(val){
        this.val = val
        this.left = null;
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    //adding pushing
    // Time Complexity O(logn)
    insert(val){
        const newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root;
        while(true){
            if(temp.val === val) return undefined
            if(newNode.val < temp.val){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    //if value exits on BST
    contains(){
        if(this.root === null){
            return false
        }
        let temp = this.root;
        while(temp){
            if(val < temp.val){
                temp = temp.left
            }else if(val > temp.val){
                temp = temp.right;
            }else{

            }
        }
    }

    BFS(){
        let currentNode = this.root
        let queue = [currentNode]
        let results = []
        while(queue.length){
            currentNode = queue.shift()

        }
    }
    DFS(){
        let results = []
        function travers(){
            results.push(currentNode.val)
            if(currentNode.left)travers(currentNode.left)
            if(currentNode.right)travers(currentNode.right)
            
        }
    }

}

const bst = new BST()
bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(9)

