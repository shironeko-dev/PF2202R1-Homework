
function getOldValue() {
    return document.getElementById("oldValue").innerText;
}

function printOldValue(num) {
    document.getElementById("oldValue").innerText = num;
}

function getResult() {
    return document.getElementById("exportValue").innerText;
}

function printResult(num) {
    if (num == "") {
        document.getElementById("exportValue").innerText = num;
    } else {
        document.getElementById("exportValue").innerText = stringFormat(num);
    }
}

function stringFormat(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function delStringFormat(num) {
    return Number(num.replace(/,/g, ''))
}

var system = document.getElementsByClassName('btnSystem');
for (var i = 0; i < system.length; i++) {
    system[i].addEventListener('click', function () {
        if (this.id == "deleteAll") {
            printResult("");
            printOldValue("");
        }
        else if (this.id == "deleteOne") {
            var result = delStringFormat(getResult()).toString();
            if (result) {
                result = result.substr(0, result.length - 1)
                printResult(result)
            }
        }
        else {
            var result = getResult();
            var oldResult = getOldValue();
            if (result != "") {
                result = delStringFormat(result);
                oldResult = oldResult + result;
                if (this.id == "=") {
                    var endResult = eval(oldResult);
                    printResult(endResult)
                    printOldValue("")
                } else {
                    oldResult = oldResult + this.id;
                    printOldValue(oldResult)
                    printResult("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName('btnNumber');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var result = delStringFormat(getResult())
        if (result != NaN) {
            result = result + this.id;
            printResult(result)
        }
    })
}