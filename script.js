document.addEventListener("DOMContentLoaded", function () {

    // Rocket animation
    const rocketAnimation = document.getElementById('rocket-animation');
    const rocket = document.getElementById('rocket');
    const page1 = document.getElementById('page1');

    rocket.addEventListener('animationend', function () {
        rocketAnimation.classList.add('hide');
        document.body.style.overflow = 'auto'; // Re-enable scrolling after the animation

        // Show the homepage after the rocket animation ends and the fade-out transition starts
        setTimeout(() => {
            rocketAnimation.style.display = 'none'; // Completely hide after transition
            page1.style.opacity = '1'; // Fade in the homepage
        }, 2000); // Duration should match the CSS transition duration
    });

    // Text animation
    const changingText = document.querySelector(".changing-text");
    const originalText = "INDUSTRY";
    const newText = "EXPLORATION";
    let currentIndex = originalText.length;

    function backspace() {
        if (currentIndex >= 0) {
            changingText.textContent = originalText.slice(0, currentIndex);
            currentIndex--;
            setTimeout(backspace, 150);
        } else {
            currentIndex = 0;
            setTimeout(type, 250);
        }
    }

    function type() {
        if (currentIndex <= newText.length) {
            changingText.textContent = newText.slice(0, currentIndex);
            currentIndex++;
            setTimeout(type, 150);
        }
    }

    setTimeout(backspace, 3700);

    // Cursor movement
    const cursor = document.querySelector("#cursor");
    document.addEventListener("mousemove", function (event) {
        cursor.style.left = event.clientX - 20 + "px";
        cursor.style.top = event.clientY - 20 + "px";
    });

    // Change cursor on link hover
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("mouseover", () => {
            cursor.style.backgroundImage = "url('image/cursor5.png')";
        });
        link.addEventListener("mouseout", () => {
            cursor.style.backgroundImage = "url('image/cursor4.png')";
        });
    });

    // Navbar hide/show on scroll
    // const navbar = document.getElementById('navbar');
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 20) { // adjust the value to your needs
    //         navbar.classList.add('hide');
    //     } else {
    //         navbar.classList.remove('hide');
    //     }
    // });
});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// about us
let currentOpenIndex = 6; // Set the default open index to 6 (7th item)

function toggleAnswer(index) {
    const currentAnswer = document.getElementById(`answer-${index}`);
    const currentArrow = document.getElementById(`arrow-${index}`);

    if (currentOpenIndex !== null && currentOpenIndex !== index) {
        const prevAnswer = document.getElementById(`answer-${currentOpenIndex}`);
        const prevArrow = document.getElementById(`arrow-${currentOpenIndex}`);
        prevAnswer.style.display = 'none';
        prevArrow.classList.remove('up');
        prevArrow.classList.add('down');
    }

    if (currentAnswer.style.display === 'block') {
        currentAnswer.style.display = 'none';
        currentArrow.classList.remove('up');
        currentArrow.classList.add('down');
        currentOpenIndex = null;
    } else {
        currentAnswer.style.display = 'block';
        currentArrow.classList.remove('down');
        currentArrow.classList.add('up');
        currentOpenIndex = index;
    }
}
// Add this line to open the 7th item by default when the page loads
toggleAnswer(1);

// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     var name = document.getElementById('name').value.trim();
//     var name = document.getElementById('subject').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var message = document.getElementById('message').value.trim();
//     var button = e.target.querySelector('button');

//     button.classList.remove('animate', 'success', 'error');

//     if (name === "" || email === "" || message === "") {
//         button.classList.add('animate', 'error');
//         setTimeout(function () {
//             location.reload();
//             alert("Please fill out all fields.");
//         }, 3000);  // delay to match the error animation duration
//     } else {
//         button.classList.add('animate', 'success');
//         setTimeout(function () {
//             location.reload();
//             alert("Thank You for contacting us!");
//         }, 3000);  // delay to allow success animation to complete
//     }
// });