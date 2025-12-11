// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

const clearArrays = function (array) {
  let newArrayStr = array.join(",").split(",");
  let newArrayNum = [];

  for (let el of newArrayStr) {
    el = Number(el);
    newArrayNum.push(el);
  }
  return newArrayNum;
};

console.log(clearArrays([1, 2, [3, 4, [5]]]));
