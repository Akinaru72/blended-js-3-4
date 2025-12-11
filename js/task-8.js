// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [ 11, 9, 2, 1 ]

const reverseArray = function (array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - 1 - i]);
  }
  return newArray;
};

console.log(reverseArray([11, 9, 2, 1]));
