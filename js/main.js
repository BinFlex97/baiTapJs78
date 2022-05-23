var arrayNumber = []
var newArrayNumber = []


function addNumber(x, y, z) {
    x.push(Number(document.querySelector(y).value))
    document.querySelector(z).innerHTML = x
}

document.querySelector('#button0').onclick = function () { addNumber(arrayNumber, '#nhapN', '#mangNumber') }

function tongDuong() {
    var tong = 0
    var dem = 0
    for (i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            tong += arrayNumber[i]
            dem++
        }
    }
    document.getElementById('kq1').innerHTML = 'Tổng Các Số Dương Trong Mảng : ' + tong
    document.getElementById('kq2').innerHTML = 'Đếm Số Dương : ' + dem
}

function minNumber() {
    var num = arrayNumber[0]
    for (i = 0; i < arrayNumber.length; i++) {
        if (num > arrayNumber[i]) {
            num = arrayNumber[i]
        }
    }
    document.getElementById('kq3').innerHTML = num
}

function minPositiveNumber() {
    var num = 2 / 0
    for (i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0 && num > arrayNumber[i]) {
            num = arrayNumber[i]
        }
    }
    if (num == 2 / 0) {
        document.getElementById('kq4').innerHTML = "không có giá trị dương"
    } else document.getElementById('kq4').innerHTML = num
}

function lastEvenNumber() {
    var num = -1
    for (i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 == 0) {
            num = arrayNumber[i]
        }
    }
    document.getElementById('kq5').innerHTML = num
}

function swapNumber() {
    var num = arrayNumber[document.getElementById('nhap1').value];
    arrayNumber[document.getElementById('nhap1').value] = arrayNumber[document.getElementById('nhap2').value];
    arrayNumber[document.getElementById('nhap2').value] = num

    document.getElementById('kq6').innerHTML = arrayNumber
}

function sortRaise() {
    for (i = 0; i < arrayNumber.length; i++) {
        for (y = i; y < arrayNumber.length; y++) {
            if (arrayNumber[i] > arrayNumber[y]) {
                var num = arrayNumber[i]
                arrayNumber[i] = arrayNumber[y]
                arrayNumber[y] = num
            }
        }
    }
    document.getElementById('kq7').innerHTML = arrayNumber
}

function NumNT() {
    var num = -1
    for (i = 0; i < arrayNumber.length; i++) {
        var n = 0
        for (a = 0; a <= arrayNumber[i]; a++) {
            if (arrayNumber[i] % a == 0) n++
        }
        if (n == 2) {
            num = arrayNumber[i]
            break
        }
    }
    document.getElementById('kq8').innerHTML = num
}

document.querySelector("#button9").onclick = function () { addNumber(newArrayNumber, '#nhapNew', '#mangNum9') }

function intCount() {
    var count = 0
    for (i = 0; i < newArrayNumber.length; i++) {
        if (newArrayNumber[i] == parseInt(newArrayNumber[i])) count++
    }
    document.getElementById('kq9').innerHTML = count
}
function numCompare() {
    var numUp = 0
    var numDown = 0
    for (i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i]>0 ) numUp++
        else if(arrayNumber[i]<0) numDown++
    }
    if(numUp > numDown){
        document.getElementById('kq10').innerHTML = 'Số lượng số Dương Nhiều hơn <br>Số Dương : '+ numUp + "<br>Số Âm : " + numDown
    }else if(numUp == numDown){
        document.getElementById('kq10').innerHTML = 'Số lượng 2 số bằng nhau<br>Số Dương : '+ numUp + "<br>Số Âm : " + numDown
    }else document.getElementById('kq10').innerHTML = 'Số lượng số Âm Nhiều hơn <br>Số Dương : '+ numUp + "<br>Số Âm : " + numDown
}