// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

const updateObject = function (obj, ...args) {
  const newObj = {};
  for (const el in obj) {
    if (!args.includes(el)) {
      newObj[el] = obj[el];
    }
  }
  return newObj;
};

console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));
