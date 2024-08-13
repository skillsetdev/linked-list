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
  contains(value) {
    let tmp = this.headNode;
    while (tmp.nextNode !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }
  find(value) {
    let tmp = this.headNode;
    let index = 0;
    while (tmp.nextNode !== null) {
      if (tmp.value === value) {
        return index;
      }
      index++;
      tmp = tmp.nextNode;
    }
    return null;
  }
  toString() {
    let tmp = this.headNode;
    var resultString = "";
    while (tmp !== null) {
      resultString += ` (${tmp.value}) ${tmp.nextNode !== null ? "->" : ""}`;
      tmp = tmp.nextNode;
    }
    return resultString;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return "Index out of bounds";
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let tmp = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.nextNode;
    }
    let newNode = new Node(value, tmp.nextNode);
    tmp.nextNode = newNode;
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return "Index out of bounds";
    }
    let tmp = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = tmp.nextNode.nextNode;
  }
}
