// calculator method
// get history value
function getHistory() {
    return document.getElementById('history_value').innerText;
}

// print history value 

function printHistory(num) {
    document.getElementById('history_value').innerText = num;
}

// get output value 

function getOutput() {
    return document.getElementById('outoput_value').innerText;
}

// print output value 

function printOutput(num) {
    if (num == '') {
        document.getElementById('outoput_value').innerText = num;
    } else {
        document.getElementById('outoput_value').innerText = formatNumber(num);
    }

}
// format number 
function formatNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}

// normal number 

function normalNumber(num) {
    return Number(num.replace(/,/g, ''));
}
// get number id 
let history;
let number = document.getElementsByClassName('number');
for (let idd of number) {
    idd.addEventListener('click', function() {
        history = getHistory();
        history = history + this.id;
        printHistory(history);
    });
}

// get operator id

let operator = document.getElementsByClassName('operator');
for (let idd of operator) {
    idd.addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory('');
            printOutput('');

        } else if (this.id == 'backspace') {
            history = getHistory();
            history = history.substr(0, history.length - 1);
            printHistory(history);
            printOutput('');
        } else if (this.id == '=') {
            history = getHistory();
            let result = eval(history);
            if (result.toString().length <= 10) {
                printOutput(result);
                printHistory(history + '=');
            } else {
                alert('this is little calculator');
            }
        } else {
            let output = getOutput();
            history = getHistory();
            if (output) {
                history = normalNumber(output) + this.id;
                printHistory(history);
            } else if (history == '') {
                printHistory('');
            } else if (isNaN(history[history.length - 1])) {
                history = history.substr(0, history.length - 1) + this.id;
                printHistory(history);
            } else {
                history = history + this.id;
                printHistory(history);
            }

        }


    });
}