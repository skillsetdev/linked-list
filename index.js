import LinkedList from "./linked-list.js";
let list = new LinkedList();
list.append("two");
list.append("three");
list.prepend("one");

console.log(`List String: ${list.toString()} Size: ${list.size()}`);
console.log(`Head Node: ${JSON.stringify(list.head(), null, 2)}`);
console.log(`Tail Node: ${JSON.stringify(list.tail(), null, 2)}`);
console.log(`Node at position 2: ${JSON.stringify(list.at(2), null, 2)}`);
console.log(
  `${
    list.contains("two") ? "Contains" : "Doesn't contain"
  } "two" at position: ${list.find("two")}`
);
list.insertAt("insertion", 1);
console.log(
  `AFTER INSERTION: List String: ${list.toString()} Size: ${list.size()}`
);
list.removeAt(1);
console.log(
  `AFTER REMOVAL OF INSERTION: List String: ${list.toString()} Size: ${list.size()}`
);
