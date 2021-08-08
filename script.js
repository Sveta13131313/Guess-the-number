'use strick'




const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
const game = function () {
    let randomNumber = parseInt(Math.random() * 100);
    const trackNumber = function (track) {
        if (track <= 9 && track >= 0) {
            let number = prompt('Угадай число от 1 до 100');
            if (number != null) {
                if (isNumber(number)) {
                    number = +number;
                    if (number < randomNumber) {
                        alert('Загаданное число больше, осталось ' + track + ' попыток');
                    }
                    else if (number > randomNumber) {
                        alert('Загаданное число меньше осталось ' + track + ' попыток');
                    }
                    else if (number == randomNumber) {
                        alert('Поздравляю! Вы угадали число за ' + track + ' попыток');
                        let again = confirm('Хотите сыграть еще?');
                        if (again == true) {
                            console.log(trackNumber(9));
                        }
                        else {
                            return number;
                        }
                    }
                } else {
                    alert('Можно вводить только числа');
                }
            }
            else if (number == null) {
                return alert('Жаль, что вы не хотите играть');
            }
        }
        else {
            let yes = confirm('Попытки закончились, хотите сыграть еще?');
            if (yes == true) {
                console.log(trackNumber(9));
            }
        }
        return trackNumber(track - 1);

    }

    console.log(trackNumber(9));
}

game();