document.addEventListener('DOMContentLoaded', () => {


setTimeout(() => {


  // typing 1
  const typed1 = new Typed(".typing1", {
      strings: [
          "<span>A good place to collab safe</span>"
      ],
      typeSpeed: 20,
      showCursor: false,

  });


  const typingElements = document.querySelectorAll(".typing1");
    for (const element of typingElements) {
        element.style.backgroundColor = "rgba(0, 0, 0, 1)";
    }


  // typing 2
  const typed2 = new Typed(".typing2", {
    strings: [
        "<span>CODEZ</span>"
    ],
    typeSpeed: 60,
    showCursor: false,

});
    
}, 1800); 



      
  //-----------------------------------------------------------------------frontbg--------------------------------------------------------------------
  

  var canvas = document.querySelector("#frontbg"),
  ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var fontSize = 10,
  columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, .1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgb(5, 130, 232)";
  for (var i = 0; i < drops.length; i++) {
    var text = String.fromCharCode(Math.floor(Math.random() * 255)); // Random character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;

    if (drops[i] * fontSize > canvas.height) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 33);

     
  
  
  });
  









