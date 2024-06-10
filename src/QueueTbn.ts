class QueueNode {     //Se crea esta clase para poder crear el tipo de dato Node para almacenar los nodos
    value: number
    next: QueueNode | null

    constructor(value: number){ //El next siempre va a ser nulo, mejor se define adentro
        this.value = value
        this.next = null
    }
}


class Queue {           //Esta sería directamente la clase para crear la cola
    head: Node | null
    tail: Node | null
    length: number

    constructor() {            //El constructor inicializa las variables en este caso en null y 0
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(node: QueueNode): void{ //Este método es para encolar, recibe un nodo, pero no retorna nada.
        if(!this.tail) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.lenght += 1

    dequeue(): QueueNode | null{   //Acá se desencola, no se recibe nada porque la cabeza ya existe, retorna Nodo que
        if (!this.head){
            return null
        }

        if (this.head === this.tail){
            this.tail = null
        }
        
        const head = this.head //Esta es la variable temporal. Se puede llamar igual porque sólo vive dentro de este método
        this.head = this.head.next

        head.next = null //Esto borra la referencia del next del head anterior
        this.length -= 1
        return head
    }
    }
}