
const galleries = document.querySelectorAll('.gallery-container');
galleries.forEach((gallery, galleryIdx) => {
    let currentIndex = 0;
    let intervalId;
    const galleryWrapper = gallery.querySelector('.gallery-wrapper');
    const totalImages = gallery.querySelectorAll('.gallery-item').length;
    const dots = gallery.querySelectorAll('.dot');

    function showImage(index) {
        if (index >= totalImages) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalImages - 2;
        } else {
            currentIndex = index;
        }
        galleryWrapper.style.transition = 'transform 0.5s ease';
        galleryWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
        updateDots();
    }

    function nextImage() {
        if (currentIndex >= totalImages - 1) {
            currentIndex = 0;
            galleryWrapper.style.transition = 'none';
            galleryWrapper.style.transform = `translateX(0%)`;
            setTimeout(() => {
                galleryWrapper.style.transition = 'transform 0.5s ease';
                showImage(currentIndex + 1);
            }, 50);
        } else {
            showImage(currentIndex + 1);
        }
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    function jumpToImage(index) {
        showImage(index);
    }

    function updateDots() {
        dots.forEach((dot, idx) => {
            if (idx === currentIndex || (currentIndex === totalImages - 1 && idx === 0)) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startInterval() {
        intervalId = setInterval(() => {
            nextImage();
        }, 5000);
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    gallery.addEventListener('mouseover', startInterval);
    gallery.addEventListener('mouseout', stopInterval);

    gallery.querySelectorAll('.learn-more').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const moreInfo = btn.nextElementSibling;
            moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
            if (moreInfo.style.display === 'block') {
                stopInterval();
                btn.textContent = 'View Less';
            } else {
                startInterval();
                btn.textContent = 'Learn More';
            }
        });
    });

    gallery.querySelectorAll('.arrow.left').forEach(arrow => {
        arrow.addEventListener('click', prevImage);
    });

    gallery.querySelectorAll('.arrow.right').forEach(arrow => {
        arrow.addEventListener('click', nextImage);
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => jumpToImage(idx));
    });

    updateDots();
});


document.getElementById('learn-more-btn').addEventListener('click', function () {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Learn More';
    }
});

document.getElementById('chat-icon').addEventListener('click', function () {
    alert('Chat feature coming soon!');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});


function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.reload(); 
})