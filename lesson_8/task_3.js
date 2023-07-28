// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const myArray = [];
let sumArray = 0;
let minElement = 9;
let three = false;
for (let i = 0; i < 5; i++) {
    myArray.push(Math.floor(Math.random(9) * 10));
    sumArray += myArray[i]
    if (myArray[i] < minElement) {
        minElement = myArray[i];
    }
    if (myArray[i] === 3) {
        three = true;
    }
}

console.log("Массив: " + myArray);
console.log("Сума элементов массива: " + sumArray);
console.log("Минимальный элемент: " + minElement);
if (three) {
    console.log("В массиве ЕСТЬ число 3");
} else {
    console.log("В массиве НЕТ числа 3");

}
