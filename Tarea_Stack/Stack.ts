class StackNode<T> {
    value: T
    next: StackNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class Stack<T>{
    head:StackNode<T> | null
    length: number

    constructor(){
        this.head = null
        this.length = 0
    }

    push(node: StackNode<T>): void{
        if (!this.head) {
            this.head = node
        } else{
            this.head.next = node
            this.head = node
        }
        
    }

    pop(){

    }
}