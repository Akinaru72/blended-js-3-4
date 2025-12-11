// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const cleanArray = function (array) {
  const newArray = [];
  for (const el of array) {
    if (el) {
      newArray.push(el);
    }
  }
  return newArray;
};

console.log(cleanArray([0, 1, false, 2, undefined, "", 3, null]));
