// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]

const filterArray = function (arr1, arr2) {
  const newArr = [];
  for (const el of arr1) {
    if (!arr2.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr;
};

console.log(filterArray([1, 2, 3, 1, 2], [1, 2]));
