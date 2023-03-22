Задание 6

let arr = ['a', 3, 'c', 5, 'e', 7, 'g', 9];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("типы элементов одинаковы");
} else {
    console.log("типы элементов не одинаковы");
}