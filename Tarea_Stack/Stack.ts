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
            node.next = this.head
            this.head = node
        }
        this.length += 1
    }

    pop(): T | null{
        if(!this.head){
            return null
        }

        const temp = this.head
        this.head = this.head.next

        temp.next = null
        this.length -= 1

        return temp.value

    }
}

//------------------------------------------------------------------------------------
// Prueba
const pila = new Stack<number>()
console.log(pila)   //Stack { head: null, length: 0 }

const nodeA = new StackNode<number>(26)
pila.push(nodeA)
console.log(pila)   //Stack { head: StackNode { value: 26, next: null }, length: 1 }

const nodeB = new StackNode<number>(54)
pila.push(nodeB)
console.log(pila)   //Stack {head: StackNode { value: 54, next: StackNode { value: 26, next: null } }, length: 2}

const nodeC = new StackNode<number>(5)
pila.push(nodeC)
console.log(JSON.stringify(pila)) //{"head":{"value":5,"next":{"value":54,"next":{"value":26,"next":null}}},"length":3}

// pila.pop()
console.log(pila.pop()) //5
console.log(pila)   //Stack {head: StackNode { value: 54, next: StackNode { value: 26, next: null } }, length: 2 }

console.log(pila.pop()) //54
console.log(pila)   //Stack { head: StackNode { value: 26, next: null }, length: 1 }

console.log(pila.pop()) //26
console.log(pila)   //Stack { head: null, length: 0 }

console.log(pila.pop()) //null
console.log(pila)   //Stack { head: null, length: 0 }
