class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}
// O(1) if removal or insertion and O(n) if searching/access

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }

    let shiftedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedHead.next;
      this.head.previous = null;
      shiftedHead.next = null;
    }
    this.length--;

    return shiftedHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let count;
    let current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.previous = beforeNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.prev;
    removedNode.next = null;
    removedNode.previous = null;
    this.length--;

    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(56);
list.push('16');
list.push('List');
list.push('Array');

// console.log(list.shift());
console.log(list.set(4, 'Object'));
console.log(list.remove(4));
