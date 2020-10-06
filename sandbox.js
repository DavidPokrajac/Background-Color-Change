window.onload = function(){

  var button = document.querySelector("button");
  var body = document.querySelector("body");

  var colors = ["aquamarine", "steelblue", "tomato", "cornflowerblue", "limegreen", "peachpuff"];

  button.addEventListener("click", function(){

    var colorIndex = parseInt(Math.random() * colors.length);

    body.style.backgroundColor = colors[colorIndex];

  });

}
