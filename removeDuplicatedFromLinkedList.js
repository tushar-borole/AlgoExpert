// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let currentLinkedList = linkedList
    while(currentLinkedList.next !==null){
        if(currentLinkedList.value === currentLinkedList.next.value){
            currentLinkedList.next = currentLinkedList.next.next
        }
    }


    return currentLinkedList
}

const linked = new LinkedList(1)
linked.next = new LinkedList(1)
linked.next.next = new LinkedList(2)
linked.next.next.next = new LinkedList(3)

removeDuplicatesFromLinkedList(linked)//?