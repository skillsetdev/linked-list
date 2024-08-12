import LinkedList from "./linked-list.js";
let list = new LinkedList();
list.append("two");
list.append("three");
list.prepend("one");

console.log(`Size: ${list.size()}`);
console.log(`Head Node: ${JSON.stringify(list.head(), null, 2)}`);
console.log(`Tail Node: ${JSON.stringify(list.tail(), null, 2)}`);
console.log(`Node at position 2: ${JSON.stringify(list.at(2), null, 2)}`);
