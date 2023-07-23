// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
console.log(toCube(2) + toCube(3));

function toCube(number) {
    return Math.pow(number, 3)
}