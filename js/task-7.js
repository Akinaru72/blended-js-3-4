// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

let count = 1;

// Кожна транзакція - це об'єкт із властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //історія транзакцій
  transactions: [],

  // Метод створює та повертає об'єкт транзакцій
  // Приймає суму та тип транзакції

  createTransaction(type, amount) {
    return {
      id: count++,
      type,
      amount,
    };
  },

  // Метод відповідає за додавання суми до балансу.
  // Приймає суму транзакції
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій

  deposit(amount) {
    const result = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(result);
    this.balance += amount;
  },

  // Метод відповідає за зняття суми з балансу.
  // Приймає суму тразакцій.
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій
  // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Not enough money");
      return;
    }

    const result = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push(result);
    this.balance -= amount;
  },

  // Метод, що повертає поточний баланс
  getBalance() {
    return this.balance;
  },

  // Метод шукає та повертає об'єкта транзакції по id
  getTransactionDetails(id) {
    for (const el of this.transactions) {
      if (el.id === id) {
        return el;
      }
    }
    return "Not found id";
  },

  // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
  getTransactionType(type) {
    let total = 0;

    for (const el of this.transactions) {
      if (el.type === type) {
        total += el.amount;
      }
    }

    return total;
  },
};

// --- Проверка deposit ---
account.deposit(500);
account.deposit(300);
console.log(
  "После двух депозитов баланс должен быть 800:",
  account.getBalance()
);
console.log("История транзакций после депозитов:", account.transactions);

// --- Проверка withdraw ---
account.withdraw(200);
console.log("После снятия 200 баланс должен быть 600:", account.getBalance());
console.log("История транзакций после снятия:", account.transactions);

// --- Проверка insufficient funds ---
account.withdraw(1000); // должно вывести сообщение об ошибке

// --- Проверка поиска транзакции по id ---
console.log("Транзакция с id 1:", account.getTransactionDetails(1));
console.log(
  "Транзакция с id 999 (не существует):",
  account.getTransactionDetails(999)
);

// // --- Проверка суммы по типу транзакции ---
console.log("Сумма deposit:", account.getTransactionType(Transaction.DEPOSIT));
console.log(
  "Сумма withdraw:",
  account.getTransactionType(Transaction.WITHDRAW)
);
