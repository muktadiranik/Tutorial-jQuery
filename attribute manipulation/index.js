var a = $("#a-1").attr("href");
$("#p-1").text(a);

$("#a-2").removeAttr("href");
var b = $("#a-2").attr("href");
$("#p-2").text(b);

$("#a-3").attr("href", "https://www.facebook.com/").text("Facebook");
var c = $("#a-3").attr("href");
$("#p-3").text(c);
