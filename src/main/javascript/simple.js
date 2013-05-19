var increment = function (number) {
    if (isNaN(number)) {
        throw 'Argument ' + number + ' is not a number'
    }
    return number + 1
}

incrementer = {
    increment: increment
}
