// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]

const clearArray = function (array) {
  const newArray = [];
  for (const el of array) {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }
  return newArray;
};

console.log(clearArray(["a", 1, 2, "b", 3, 1, 2, "a"]));
