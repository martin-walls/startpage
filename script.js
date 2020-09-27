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

$(document).ready(function () {
  $("#link-reddit").hover(function () {
    $(".bg").css("background-color", "#ff450080");
  });

  $("#link-youtube").hover(function () {
    $(".bg").css("background-color", "#ff000080");
  });

  $("#link-github").hover(function () {
    $(".bg").css("background-color", "#24292eff");
    // $(".time").css("color", "#1e1e1e");
    // $(this).css("color", "#1e1e1e");
  });

  $("#link-pocket").hover(function () {
    $(".bg").css("background-color", "#ef4056a0");
  });

  $("#link-disney").hover(function () {
    $(".bg").css("background-color", "#067eb3a0");
  });

  $("a").mouseleave(function () {
    $(".bg").css("background-color", "#0000");
    $(".time").css("color", "#fff");
    $(this).css("color", "#fff");
  });

  $(document).on("keyup", function (e) {
    if (e.keyCode === 49) {
      // [0] is needed to trigger the click event on the text inside the tag
      //     instead of the tag itself, which doesn't work
      $("#link-reddit")[0].click();
    } else if (e.keyCode === 50) {
      $("#link-youtube")[0].click();
    } else if (e.keyCode === 51) {
      $("#link-github")[0].click();
    } else if (e.keyCode === 52) {
      $("#link-pocket")[0].click();
    } else if (e.keyCode === 53) {
      $("#link-disney")[0].click();
    }
  });
});
