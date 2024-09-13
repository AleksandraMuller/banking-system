const { LinkedList, TreeNode } = require('./dataStructures.js');

class Bank {
  constructor() {
    this.accounts = new LinkedList();
    this.root = null;
  }

  addAccount(accountNumber, balance, accountType) {
    this.accounts.add(accountNumber, balance, accountType);
    this.root = this.addAccountToTree(
      this.root,
      accountNumber,
      balance,
      accountType
    );
  }

  addAccountToTree(node, accountNumber, balance, accountType) {
    if (!node) {
      return new TreeNode(accountNumber, balance, accountType);
    }
    if (accountNumber < node.accountNumber) {
      node.left = this.addAccountToTree(
        node.left,
        accountNumber,
        balance,
        accountType
      );
    } else if (accountNumber > node.accountNumber) {
      node.right = this.addAccountToTree(
        node.right,
        accountNumber,
        balance,
        accountType
      );
    }

    return node;
  }

  transferAmount(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.accounts.find(fromAccountNumber);
    const toAccount = this.accounts.find(toAccountNumber);

    if (fromAccount && toAccount) {
      if (fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        console.log(
          `Transferred ${amount} from account number ${fromAccountNumber} to account ${toAccountNumber}.`
        );
      } else {
        console.log('Insufficient balance.');
      }
    } else {
      console.log('One or both account numbers are invalid.');
    }
  }

  checkBalance(accountNumber) {
    const account = this.accounts.find(accountNumber);
    if (account) {
      console.log(`Balance for account ${accountNumber}: ${account.balance}`);
    } else {
      console.log('Account not found.');
    }
  }

  printTree(node = this.root) {
    if (node !== null) {
      this.printTree(node.left);
      console.log(
        `Account number: ${node.accountNumber}, Balance: ${node.balance}, Account type ${node.accountType}`
      );
      this.printTree(node.right);
    }
  }
}

const bank = new Bank();

// Add bank accounts:
bank.addAccount(1011111, 10000, 'Saving');
bank.addAccount(1022222, 30000, 'Current');
bank.addAccount(1033333, 50000, 'Loan');

bank.printTree();

//Check current balance
bank.checkBalance(1011111);
bank.checkBalance(1022222);

//Transfer
bank.transferAmount(1011111, 1022222, 2000);

//Check balance after transfer
bank.checkBalance(1011111);
bank.checkBalance(1022222);
