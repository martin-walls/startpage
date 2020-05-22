function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();

    hr = leftPadZeroes(hr);
    min = leftPadZeroes(min);

    document.getElementById("time").innerHTML = hr + ":" + min;

    var t = setTimeout(startTime, 1000);
}

function leftPadZeroes(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}