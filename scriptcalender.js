
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const description = button.closest('.event-description');
    description.style.opacity = '0';
  });
});

// event box
document.querySelectorAll('.event-box').forEach(box => {
  box.addEventListener('mouseover', () => {
    box.querySelector('.event-description').style.opacity = '1';
  });
  box.addEventListener('mouseout', () => {
    box.querySelector('.event-description').style.opacity = '0';
  });
});


// video
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const video = document.getElementById('background-video');

  // Function to check if video has ended
  video.addEventListener('ended', () => {
    video.pause();  // Pause the video at the end
  });

  // Show the overlay content after 2 seconds
  setTimeout(() => {
    overlay.classList.add('show');
  }, 1000);
});

const video = document.getElementById('bg-video');

// hamburger
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle('active');
});

//heading
// function([string1, string2],target id,[color1,color2])    
consoleText(['Stargazing Calender', 'Year 2024'], 'text', ['bisque', 'white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}