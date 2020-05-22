$(window).on("load", startTime);

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();

    hr = leftPadZeroes(hr);
    min = leftPadZeroes(min);

    document.getElementById("time-hr").innerHTML = hr;
    document.getElementById("time-min").innerHTML = min;

    var t = setTimeout(startTime, 1000);
}

function leftPadZeroes(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}

$(document).ready(function() {
    $("#link-reddit").hover(function() {
        $(".bg").css("background-color", "#ff4500c0");
    });
    
    $("#link-youtube").hover(function() {
        $(".bg").css("background-color", "#ff0000c0");
    });
    
    $("#link-github").hover(function() {
        $(".bg").css("background-color", "#24292ec0");
        // $(".time").css("color", "#1e1e1e");
        // $(this).css("color", "#1e1e1e");
    });
    
    $("#link-pocket").hover(function() {
        $(".bg").css("background-color", "#ef4056c0");
    });
    
    $("#link-iplayer").hover(function() {
        $(".bg").css("background-color", "#067eb3c0");
    });

    $("a").mouseleave(function() {
        $(".bg").css("background-color", "#0000");
        $(".time").css("color", "#fff");
        $(this).css("color", "#fff");
    });
});