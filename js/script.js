'use stirct'

//1 вариант

// var number = 3;
// var win = false;
// var guessNumber = prompt('Угадайте число, которое было загадано');

// while (!guessNumber) {
//     alert('Вы не ввели число, пожалуйста введите число');
//     guessNumber = prompt('Угадай число, которое было загадано');
// }

// while (!win) {
//     if (number > guessNumber) {
//         alert('Ваше число меньше загаданного, попробуйте еще раз');
//         guessNumber = prompt('Угадайте число, которое было загадано');
//     } else if (number < guessNumber) {
//         alert('Ваше число больше загаданного, попробуйте еще раз');
//         guessNumber = prompt('Угадайте число, которое было загадано');
//     } else {
//         confirm('Вы угадали! Желаете продолжить или выйти?');
//         win = true;
//     }
// }


//2 вариант - С предложением повторить--------------------------



// var guessNumber = function() {
//     var number = 3;
//     var userChoice = prompt('Угадайте число, которое было загадано');

//     while (!userChoice || Number.isNaN(+userChoice)) {
//         alert('Вы не ввели число, пожалуйста введите число');
//         guessNumber();
//     }
    
//     if (number > userChoice) {
//         alert('Ваше число меньше загаданного, попробуйте еще раз');
//         guessNumber();
//     } else if (number < userChoice) {
//         alert('Ваше число больше загаданного, попробуйте еще раз');
//         guessNumber();
//     } else {
//         if(confirm('Вы угадали! Желаете продолжить или выйти? Нажмите ОК чтобы продолжить')) {
//             alert('Тогда начнем заново');
//             guessNumber();
//         } else {
//             console.log('[userChoice else]', userChoice);
//             alert('Досвидания');
//             return;
//         }
//     }
//     return;
    
// }

// guessNumber();



//3 вариант----------------------------------------------------------


var guessNumber = function(i) {
    var number = 3;
    var userChoice = prompt('Угадайте число, которое было загадано. У вас осталось ' + i + ' попыток');
    
    while (!userChoice || Number.isNaN(+userChoice)) {
        userChoice = prompt('Вы не ввели число, пожалуйста введите число');
    }

    i = counter(i)
    if (!i) return;
    
    compare(number, userChoice, i)
    return;
}

function counter(i){
    i--;
    if (i === 0) {
        alert('Не угадали. У вас кончились попытки :(');
        return false;
    }
    return i;
}

function compare(number, userChoice, i) {
    if (number > userChoice) {
        alert('Ваше число меньше загаданного, попробуйте еще раз');
        guessNumber(i);
    } else if (number < userChoice) {
        alert('Ваше число больше загаданного, попробуйте еще раз');
        guessNumber(i);
    } else {
        confirm('Вы угадали! Желаете продолжить или выйти? Нажмите ОК чтобы продолжить') ? guessNumber(3) : alert('До свидания');
        return;
    }
}

guessNumber(5);