class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export default class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }
  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let tmp = this.headNode;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }
  prepend(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let tmp = new Node(value, this.headNode);
      this.headNode = tmp;
    }
  }
  size() {
    let tmp = this.headNode;
    let index = 0;
    while (tmp !== null) {
      index++;
      tmp = tmp.nextNode;
    }
    return index;
  }
  head() {
    return this.headNode;
  }
  tail() {
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  at(index) {
    let tmp = this.headNode;
    for (let i = 0; i < index; i++) {
      if (tmp === null) return "The List is smaller";
      tmp = tmp.nextNode;
    }
    return tmp;
  }
}
