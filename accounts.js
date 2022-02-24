// Write a programme to impact the balances of the given accounts, based on their transactions.
// Print the final balance for all the accounts with account number, name and balance amount.

/* Input */
const Accounts = [
  {
    name: 'Arun',
    accountNo: 1,
  },
  {
    name: 'Babu',
    accountNo: 2,
  },
  {
    name: 'Chandra',
    accountNo: 3,
  },
];
const Balances = {
  // accountNo: balance
  '1': 5000,
  '2': 2000,
  '3': 0,
};
const Transactions = [
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 1,
    type: 'deposit',
    amount: 500,
  },
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 300,
  },
  {
    accountNo: 2,
    type: 'withdrawal',
    amount: 200,
  },
  {
    accountNo: 3,
    type: 'deposit',
    amount: 200,
  },
];

/* Process */
var processTransaction = function (transaction) {
  var type = transaction['type'];
  var amount = transaction['amount'];
  var accountNo = transaction['accountNo'];
  var balance = Balances[accountNo];

  if (type === 'withdrawal') {
    Balances[accountNo] = balance - amount;
  } else {
    Balances[accountNo] = balance + amount;
  }
};

var updateBalancesWithTransactions = function () {
  // Implement transaction code here.
  for (var i = 0; i < Transactions.length; i++) {
    var transaction = Transactions[i];
    processTransaction(transaction);
  }
};

var displayAccountBalance = function (account) {
  var name = account['name'];
  var accountNo = account['accountNo'];
  var balance = Balances[accountNo];

  console.log(accountNo, name, balance);
};

var displayBalances = function () {
  // Implement display code here.
  for (var i = 0; i < Accounts.length; i++) {
    var account = Accounts[i];
    displayAccountBalance(account);
  }
};

var main = function () {
  /* Do not change this. */
  console.log('Balances before transactions');
  displayBalances();

  updateBalancesWithTransactions();

  console.log('Balances after transactions');
  displayBalances();
};

main();
