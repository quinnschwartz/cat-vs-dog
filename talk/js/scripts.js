$(document).ready(function() {
  $("button#Meow").click(function() {
    $(".Meow").prepend("<li>Meow!</li>");
    $(".Woof").prepend("<li>Woof</li>");
  });

  $("button#Woof").click(function() {
    $(".Woof").prepend("<li>Woof</li>");
    $(".Meow").prepend("<li>Meow!</li>");
  });
});
