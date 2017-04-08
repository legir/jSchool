/*arrayToList - Принимает на вход массив со значениями (Например [1, 2, 4, ‘test’, 10]) и формирует из него список как на картинках выше.
arrayToList([10, 11, 9, 7]) - должен вернуть то же самое, что на картинках*/

arr = [10, 11, 9, 7];

function ArrayToList(arr) {
  let i = 0;
  let list = {
  value: arr[i++]
};
  function addEllement(list, num){
      return (list.next={value: num, next: null});
      }

  let lastNode = list;
  for ( i; i<arr.length; i++) {
      lastNode = addEllement(lastNode, arr[i]);
  }

  return list;
}

/*listToArray - Выполняет обратное действие: из списка делает массив.
listToArray(list) - должен вернуть [10, 11, 9, 7]*/

let list = ArrayToList(arr);

function listToArray(list) {
  let arr = [];
  let i = 0;
  function addValue(list, i) {
    arr[i] = list.value;
  }
  while(list) {
    addValue(list, i);
    i++;
    list = list.next;
  }
  return arr
}

arr = listToArray(list);

/*getIndex - Работает аналогично indexOf() методу для массивов. Принимает на вход 2 аргумента: первый - список, второй - элемент, индекс которого нужно найти.
Находит первое вхождение элемента в список (порядковый номер). Если не найден элемент - возвращает -1
getIndex(list, 9) - вернет 2*/

function getIndex(list, el) {
    while (list && el) {
      if (list.value === el){
        return i;
      } else if(!list.next) {
          return -1;
      } else {
          i++;
          list = list.next;
      }
    }
}

console.log(getIndex(list, 10));

/*removeElement - Принимает на вход список и элемент для удаления. Удаляет все (!) вхождения элемента в список. Возвращает количество удаленных элементов. Внимание! Функция не создает новый список, а только меняет исходный!
removeElement(list, 10) - вернет 1*/

/*removeByIndex - Удаляет элемент по его порядковому номеру. Принимает список и порядковый номер в качестве аргументов. Возвращает value удаленного элемента. Внимание! Функция не создает новый список, а только меняет исходный!
removeByIndex(list, 1) - вернет 11*/

/*addValue - Вставляет значение в указанную позицию списка. Первый аргумент - список, второй - value, третий - индекс. Возвращает ссылку на первый элемент списка (по сути, это нужно будет только для случаев, когда мы изменили первый элемент). Внимание! Функция не создает новый список, а только меняет исходный!
list = addValue(list, 18, 0) - теперь 18 будет первым элементом, за ним будет идти 10, 11 и т.д.*/

/*print - Выводит все элементы списка.
print(list) - выведет 10, 11, 9, 7*/
