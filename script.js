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