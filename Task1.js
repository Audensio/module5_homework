Задание 1

let someNumber = prompt("Введите какое нибудь значение");
someNumber = Number(someNumber);
if (!isNaN(someNumber)) {
     if  (someNumber % 2 === 0) {
        console.log("Вы ввели четное число")
    } else  {
        console.log("Вы ввели не четное число")
   }
}
 else{
   console.log("Вы ввели не число")

}