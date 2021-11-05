const prompt = require('prompt-sync')();
var _ = require('lodash');

var countFloor = 1
var lock_five = true
var lock_six = false
var lock_seven = false
var temp = []
var x = prompt('Inputkan nomor loker yang dicari : ')
var input = parseInt(x);


for (let i = 1; i <= Number(input); i++) {
    temp.push(input)
    if (Number(x) == i) {
        return console.log('Loker ketemu pada lantai ' + String(countFloor))
    } else if (lock_five && temp.length === 5) {
        countFloor += 1
        lock_five = false;
        lock_six = true;
        temp = [];
    } else if (lock_six && temp.length === 6) {
        countFloor += 1
        lock_six = false
        lock_seven = true
        temp = []
    } else if (lock_seven && temp.length === 7) {
        countFloor += 1
        lock_seven = false
        lock_five = true
        temp = []
    }
}