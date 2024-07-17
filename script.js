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
            cursor.style.backgroundImage = "url('cursor5.png')";
        });
        link.addEventListener("mouseout", () => {
            cursor.style.backgroundImage = "url('cursor4.png')";
        });
    });
});