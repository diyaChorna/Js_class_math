// Напишіть функцію getDigits(number), яка приймає число і повертає його дробову частину. Приклад роботи:
// getDigits(1.25) - в консоль виводиться 0.25
// getDigits(7.313) - в консоль виводиться 0.313
// getDigits(100.3) - в консоль виводиться 0.3

// let getDigits = function(number){
//       console.log(number);
//       let floor = Math.floor(number);
//       let result = number - floor
//       console.log(result);
// }
// getDigits(1.25)
// getDigits(7.313)
// getDigits(100.3)

// Завдання 2
// Напишіть функцію getArea(number), яка обчислює площу круга. Для визначення площі використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть радіус!

// let getArea = function(radius){
//       if(radius != radius*1){
//             console.log(`Ви ввели не число`);
//       }
//       else if(radius == ''){
//             console.log('Ви нічого не ввели');
//       }
//       else{
//             console.log(radius);
//             let square = Math.pow(radius,2);
//             console.log(square);
//             area = Math.PI * square ;
//             console.log(area);
//       }
// }
// getArea(4);

// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!

let number = prompt('Введіль будь ласка число');
if(number > 0){
      let getSqrt = Math.sqrt(number);
      console.log(getSqrt);
}
else if(number < 0){
      number = -number;
      let getSqrt = Math.sqrt(number);
      console.log(getSqrt);
}
else if(number != number*1){
      console.log('Ви ввели не число');
}
else if(number ==''){
      console.log('Введіть будь ласка число');
}
else if(number == 0){
      let getSqrt = 0;
      console.log(getSqrt);
}