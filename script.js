// alert('hey I\'m Javascript');

// let admin, _name;

// _name = 'John';

// admin = _name;

// alert(admin)

/*
    data types ->
    1. Number
    2. BigInt
    3. String
    4. Boolean
    5. null
    6. undefined
    7. Object & symbol
    8. typeof
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

let head = new Node(1);
let prev = head;

for (let i = 2; i <= 10; i++) {
    let newNode = new Node(i);
    prev.next = newNode;
    prev = newNode;
}

let A = [];

while (head) {
    A.push(head.val);
    head = head.next;
}

console.log(...A);