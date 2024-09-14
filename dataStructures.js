class Node {
  constructor(accountNumber, balance, accounttype) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accounttype = accounttype;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(accountNumber, balance, accounttype) {
    const newNode = new Node(accountNumber, balance, accounttype);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  find(accountNumber) {
    let current = this.head;
    while (current) {
      if (current.accountNumber === accountNumber) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

class TreeNode {
  constructor(accountNumber, balance, accountType) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountType = accountType;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  Node,
  LinkedList,
  TreeNode,
};
