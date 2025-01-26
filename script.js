// const user = {
//     name: 'Andrew',
//     age: 13,
//     hobby: 'reading',
//     premium: true,
// };
// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }


// Завдання 2



// Напиши функцію countProps(obj), яка рахує кількість властивостей 
// в об'єкті. Функція повертає число — кількість властивостей.

// function countProps(obj) {
//     return Object.keys(obj).length;
//   }
//   const user = {
//     name: 'Andrew',
//     age: 13,
//     hobby: 'reading',
//   };
  
//   console.log(countProps(user)); 
  
//   const emptyObject = {};
//   console.log(countProps(emptyObject)); 

//   Завдання 3



// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я 
// найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість 
// виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';
  
//     for (const [name, tasks] of Object.entries(employees)) {
//       if (tasks > maxTasks) {
//         maxTasks = tasks;
//         bestEmployee = name;
//       }
//     }
  
//     return bestEmployee;
//   }
  

  // const team = {
  //   John: 15,
  //   Edvard: 25,
  //   Bob: 10,
  //   Paul: 30,
  // };
  
//   console.log(findBestEmployee(team)); 


//   Завдання 4



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого 
// в функцію, має вигляд "ім'я":"зарплата".



// function countTotalSalary(employees) {
//   let totalSalary = 0;

//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }


// const employees = {
//   John: 500,
//   Hanna: 1000,
//   Peter: 750,
// };

// console.log(countTotalSalary(employees)); 




// Завдання 5



// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.



// function countTotalSalary(employees) {
//   let totalSalary = 0;

//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// function getAllPropValues(arr, prop) {
//   const propValues = [];

//   for (const obj of arr) {
//     if (obj.hasOwnProperty(prop)) {
//       propValues.push(obj[prop]);
//     }
//   }

//   return propValues;
// }


// const employees = {
//   John: 500,
//   Hanna: 1000,
//   Peter: 750,
// };

// console.log(countTotalSalary(employees)); 

// const products = [
//   { name: "Сік", price: 130, quantity: 4 },
//   { name: "Вино", price: 700, quantity: 3 },
//   { name: "Піца", price: 200, quantity: 2 },
//   { name: "Хліб", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name")); 
// console.log(getAllPropValues(products, "quantity")); 
// console.log(getAllPropValues(products, "category")); 


// Завдання 6



// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).



// Викличи функції для перевірки працездатності твоєї реалізації.


function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

function getAllPropValues(arr, prop) {
  const propValues = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      propValues.push(obj[prop]);
    }
  }

  return propValues;
}

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }

  return totalPrice;
}


const employees = {
  John: 500,
  Hanna: 1000,
  Peter: 750,
};

console.log(countTotalSalary(employees)); 

const products = [
  { name: "Сік", price: 130, quantity: 4 },
  { name: "Вино", price: 700, quantity: 3 },
  { name: "Піца", price: 200, quantity: 2 },
  { name: "Хліб", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name")); 
console.log(getAllPropValues(products, "quantity")); 
console.log(getAllPropValues(products, "category")); 

console.log(calculateTotalPrice(products, "Сік")); 
console.log(calculateTotalPrice(products, "Вино")); 

// Завдання 7 



// Напиши сценарій керування особистим кабінетом інтернет-банку. 
// Є об'єкт account в якому необхідно реалізувати методи для роботи 
// з балансом та історією транзакцій.


const account = {
  balance: 0, 
  transactions: [],

  
  getBalance() {
    return this.balance;
  },

  
  deposit(amount) {
    if (amount <= 0) {
      console.log("Сума для поповнення має бути більше нуля.");
      return;
    }
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount,
      date: new Date().toISOString()
    });
    console.log(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
  },


  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сума для зняття має бути більше нуля.");
      return;
    }
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку.");
      return;
    }
    this.balance -= amount;
    this.transactions.push({
      type: "withdraw",
      amount,
      date: new Date().toISOString()
    });
    console.log(`З рахунку знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
  },

  getTransactionHistory() {
    if (this.transactions.length === 0) {
      console.log("Історія транзакцій порожня.");
      return;
    }
    console.log("Історія транзакцій:");
    this.transactions.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.type === "deposit" ? "Поповнення" : "Зняття"} на суму ${transaction.amount} грн, дата: ${transaction.date}`);
    });
  },

  cancelLastTransaction() {
    if (this.transactions.length === 0) {
      console.log("Немає транзакцій для скасування.");
      return;
    }
    const lastTransaction = this.transactions.pop();
    if (lastTransaction.type === "deposit") {
      this.balance -= lastTransaction.amount;
    } else if (lastTransaction.type === "withdraw") {
      this.balance += lastTransaction.amount;
    }
    console.log(`Останню транзакцію (${lastTransaction.type === "deposit" ? "поповнення" : "зняття"} на суму ${lastTransaction.amount} грн) скасовано. Поточний баланс: ${this.balance} грн.`);
  }
};


account.deposit(500); 
account.withdraw(200); 
account.getTransactionHistory();
account.cancelLastTransaction(); 
account.getTransactionHistory(); 
console.log(`Поточний баланс: ${account.getBalance()} грн`);
