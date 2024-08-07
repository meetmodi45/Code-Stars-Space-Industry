
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