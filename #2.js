//1.Задано число n. Сложить четные числа до 2*n (без рекурсии)

function sumEvens(n){
	let x = 0;
    for (let i = 2; i < 2*n; i+=2) {
	 		x += i
	 	}
        return x
	}

//2.Напишите рекурсивную функцию, которая принимает на вход положительное число N и возвращает сумму чисел от 1 до N

function sumNumber(n) {
	if (n == 1) return 1;
	let result = sumNumber(n-1);
	return n+result;
}

console.log(sumNumber(5));


//3. Напишите функцию, возвращающую n-ное число Фибоначчи (рекурсивно). Можно реализовать сначала с помощью циклов, потом переписать на рекурсию, если это упростит задачу

function nFib(n) {
  return (n == 0) ? 0 
        : (n <= 2) ? 1 
        : nFib(n-1) + nFib(n-2);
}

console.log(nFib(5));

/*
function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));
*/

//4. Найти 2 наибольших числа в массиве за один проход (без рекурсии)

function maxFigures(n){
  let result = [0, 0];
  for (let i=0; i<n.length; i++){
    if (result[0]<n[i] && result[1]<n[i]){
      result[0] = n[i];
    } else if (result[1]<n[i]){
      result[1] = n[i];
      }
    }
    return result
}

maxMass([2,56,12,24,21])

//5. Написать функцию для умножения 2х матриц (без рекурсии)

function twoMatrix(n, k){
    for (let i = 0; )

}

/*6. Написать функцию, которая рекурсивно вычисляет значение выражения:
Sn = (Sn-1 * n) / (Sn-2 + n); 
S0 = 0, S1 = 1 - условия выхода из рекурсии
*/

function s(n){
 return (n == 0) ? 0 
      : (n == 1) ? 1 
      : (s(n-1) * n) / (s(n-2) + n)
}

/* 7. Написать функцию, которая принимает на вход 3 аргумента: первый - индекс в массиве, второй - элемент, который нужно добавить в место под индексом в массиве, третий - сам массив. Функция должна добавить элемент в определенную позицию в массиве, сместив все остальные элементы. (без рекурсии)
Пример: дан массив [1, 2, 3], необходимо добавить число 2.5 в позицию 2. В результате должно получиться: [1, 2, 2.5, 3]*/

function addEl(index, el, arr){
  if (arr.length > 0 && index<=arr.length) {
    new_arr = [];
    tmp = arr[index];
    for (let n = 0; n<index; n++) {
      new_arr.push(arr[n]);
    }
    
    (typeof arr[index] !== 'undefined') ? new_arr.push(el, tmp) : new_arr.push(el);
    for (let i=index+1; i<arr.length; i++) {
    new_arr.push(arr[i]);
    }
    return new_arr;
  } else {
      return 'not valid data';
    }
}

addEl(5, 5, [21, 7, 8, 10, 11]);

// 8. Дан массив n * n, состоящий из любых чисел (не обязательно повторяющихся или одинаковых). Написать функцию, которая посчитает сумму всех его элементов. Пример: для массива ниже сумма будет 75
 
 let sum = 0;
 
 function sumNumberInArray (n) {
  if (Array.isArray(n)) {
    for (let i=0; i<n.length; i++) {
        if (Array.isArray(n[i])) {
          sumNumberInArray(n[i]);
        } else {
          sum += n[i];
        } 
      }
    }
  return sum
  }
  
  sumNumberInArray([[2,6,4],[2,3,4],[6,3,4]])

//9. Дан массив строк. Написать функцию, которая возвращает новый массив, содержащий только уникальные элементы исходного массива (без рекурсии)


function originArray (n) {
  let new_arr = {};
  for (let i=0; i<n.length; i++) {
     new_arr[n[i]] = true;
  }
  return Object.keys(new_arr)

}

//10. Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае. Использовать рекурсию

function returnLine (a, b) {
  if (a == b) {
    return console.log(a);
  } else if (a < b) {
    console.log(a++);
  } else {
    console.log(a--);
  }
  returnLine(a, b);
}

returnLine (-5, 10);

//11. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (Это аналог задачи из прошлого дз). При решении этой задачи нельзя использовать строки, массивы, циклы.

function digitsSum (n) {
  return (n<10) ? n : (n%10)+digitsSum(Math.floor(n/10));
}

//12. Дано слово, состоящее только из строчных букв. Проверьте, является ли это слово палиндромом. Использовать рекурсию

let word = 'полиндром';

function polidrom (n) {
  let l = 0;
  if (word.length == n.length) {
    for (let k = 0; k<=word.length; k++) {
      if (n.charAt(k) === word.charAt(k)){
        ++l;
    }
  }
    return (l==word.length) ? true : false;
  } else {
    return false;
  }
  
}

polidrom('кавaa');

/*13. Дан массив, содержащий последовательность натуральных чисел. Используя рекурсивную функцию вывести все нечетные элементы этого массива, сохраняя их порядок.
Пример: исходный массив: [2, 4, 5, 6, 11, 22]. Вывод: 5 11.*/

function returnOdd (n){
  let a = n.shift();
  if (!Number.isInteger(a)) return null;
  if (a%2 !== 0) {
    console.log(a);
  }
    returnOdd(n);
}

returnOdd([2, 4, 5, 6, 11, 22, 13, 15, 21]);

//14. Дан массив, содержащий последовательность натуральных чисел. Написать рекурсивную функцию, которая возвращает максимальное число в массиве.

let max = 0

function maxNumber (n) {
  let a = n.shift();
  if (a > max) {
    max = a;
  } else if (!a) {
    return console.log(max);
  }
  maxNumber(n);
}

maxNumber([2, 4, 5, 6, 11, 22, 13, 15, 21]);



//15. Напишите функцию, которая используя рекурсию проверяет, является ли число N простым. (Необходимо проверить, делится ли число N на любое из чисел меньше N)

let i = 1;
  
function simpleNumber (n) {
  if (!Number.isInteger(n) || (n<1)) return false;
  return (n == ++i) ? true 
    : (n%(i) == 0) ? false 
    : simpleNumber(n);
}

simpleNumber(29)

//16. Напишите рекурсивную функцию “flatten”, которая "выравнивает" массив. Например: flatten([1,[2],[3,[[4]]]]); -> [1,2,3,4]

function flatten(n){
  let new_arr = [];
    for (let i = 0; i < n.length; i++) {
      if (Array.isArray(n[i])) {
        new_arr = new_arr.concat(flatten(n[i]));
      } else {
        new_arr.push(n[i]);
      }
    }
  return new_arr
  }

flatten([1,[2],[3,[[4]]]]);