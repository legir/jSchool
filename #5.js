/*Дан неупорядоченный массив целых чисел. Написать функцию, которая находит максимальное произведение, полученное путем умножения трех чисел в массиве.
Способы обработки пустых массивов и массивов с количеством элементов меньше трех - на ваше усмотрение.
Пример массива на вход: [99, 11, 42, -17, 27, 78, -16]*/

function max_composition(arr) {
    arr.sort(compareNumeric);
    let result = arr[0]*arr[1]*arr[2];
    return result;
}

function compareNumeric(a, b) {
  return Math.abs(b)-Math.abs(a);
}

console.log(max_composition([99, 11, 42, -17, 27, -78, -16]));

/*Даны два неупорядоченных массива целых чисел. Написать функцию, которая возвращает массив элементов, которые присутствуют в обоих массивах (это называется “пересечение двух массивов”). В результирующем массиве элементы должны быть уникальными.
Решение должно иметь оценку сложности O(n)
Пример входных/выходных данных:
первый массив = [2, 2, 4, 1]
второй массив = [1, 2, 0, 2]
Результат = [2, 1]*/

let resObj = {};
let arr1 = [2, 2, 4, 1];
let arr2 = [1, 2, 0, 2];
const Res= [2, 1];


function intersect(arr1, arr2) {
    if (arr1>arr2) {
        for (let i = 0; i<arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
              resObj[arr1[i]] = true;
            }
        }
    } else {
        for (let i = 0; i<arr2.length; i++) {
            if (arr1.includes(arr2[i])) {
              resObj[arr2[i]] = true;
            }
        }
    }

    return Object.keys(resObj)
}

intersect(arr1, arr2);

/*#3 Легкая:
Напишите функцию, которая оценивает, является ли порядок скобок во входной строке правильным (строка состоит только из фигурных скобок {}) . Использовать стек (обычный массив с операциями .push() .pop()).
Пример:
Для строки ‘{{}}{}{}’ результат будет true
Для строки ‘{}{{}’ результат будет false*/

function analizeString(str) {
    let newArray = [];
  for (let i = 0; i<str.length; i++) {
     if (str[i] == '{') {
       newArray.push(str[i]);
     } else if (str[i] == '}') {
       newArray.pop();
     }
    }
    console.log(newArray);
    return (newArray.length === 0) ? true : false;
}

console.log(analizeString('{{}{}{}}'));
