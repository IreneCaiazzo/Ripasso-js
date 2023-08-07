function diff(number) {

    //differenza tra numero utente e 1
    result = number - 13;
    console.log(number + " - 13 = " + result);

    //se il numero è maggiore di 13 dare il doppio della differenza
    if (result > 13) {
        result = result * 2;
        console.log(result);
    } else {
        console.log(result + " è minore o uguale a 13")
    }
}

//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

function sum(add1, add2) {

    if (add1 === add2) {
        return (add1 + add2) * 3
    } else {

        return add1 + add2;
    }
}

//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19

function diffAbs(num) {

    if (num > 19) {
        result = Math.abs(num - 19) * 3;
    } else {
        result = Math.abs(num - 19);
    }

    return result

}

// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50

function number(num1, num2) {
    return num1 + num2 == 50 || num1 == 50 || num2 == 50;
}

// Write a JavaScript program to check two given integers whether one is positive and another one is negative

function posneg(num1, num2) {
    return (num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0);
}

