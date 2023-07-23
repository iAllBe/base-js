// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let number1 = prompt('Введите 1-ое число');
let number2 = prompt('Введите 2-ое число');
let number3 = prompt('Введите 3-ое число');
console.log(`Максимальное значение: ${maxNumber(number1, number2, number3)}`);

function maxNumber(number1, number2, number3) {

    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}