// Write your JS in here
alert("HELLO FROM THE MY CAT SITE!  browse cute cat images for free.");

var pics = [
  "imgs/kitty_bed.jpg",
  "imgs/kitty_basket.jpg",
  "imgs/kitty_laptop.jpg",
  "imgs/kitty_door.jpg",
  "imgs/kitty_sink.jpg",
  "imgs/kitty_wall.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var imgCounter = 1;

btn.addEventListener("click", function() {
  if (imgCounter === 6) {
    imgCounter = 0;
  }
  img.src = pics[imgCounter];
  imgCounter += 1;
});
