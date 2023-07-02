$(".container h1").text("Hello World");

$("#p-1, #h1-1").text("Hello World");

$("#p-2").html("<strong>Hello World</strong>");

$("#h1-2").append(" Hello World");

$("#h1-2").prepend("Hello World ");

var newParagraph1 = $("<p></p>").text("new paragraph 1");
$("#p-1").before(newParagraph1);

var newParagraph2 = $("<p></p>").text("new paragraph 2");
$("#p-1").after(newParagraph2);
