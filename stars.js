// Générer le champ d'étoiles
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[1] + 'px';  
  star.style.left = xy[0] + 'px'; 
  document.getElementById('starfield').append(star);
}

function getRandomPosition() {  
  var x = window.innerWidth;
  var y = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

// music.js
document.getElementById('play-button').addEventListener('click', function() {
    var audio = document.getElementById('theme-music');
    audio.volume = 0.01; // Set volume to 20%
    audio.play();
});
