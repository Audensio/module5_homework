Задание 2

let x = true;

let typeMessage = typeof x === 'number'? 'x-число':
typeof x === 'string'? 'x-строка':
typeof x === 'boolean' ? 'x-логический тип':
'Тип x не определён';
console.log (typeMessage);
