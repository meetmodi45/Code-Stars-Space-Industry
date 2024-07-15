var c= document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    c.style.left = dets.x -20+"px"
    c.style.top = dets.y -20+"px"
})
document.addEventListener("DOMContentLoaded", function () {
    const changingText = document.querySelector(".changing-text");
    const originalText = "INDUSTRY";
    const newText = "EXPLORATION";
    let currentIndex = originalText.length;

    function backspace() {
        if (currentIndex >= 0) {
            changingText.textContent = originalText.slice(0, currentIndex);
            currentIndex--;
            setTimeout(backspace, 150); // Adjust the speed of backspacing
        } else {
            currentIndex = 0;
            setTimeout(type, 250); // Delay before starting to type
        }
    }

    function type() {
        if (currentIndex <= newText.length) {
            changingText.textContent = newText.slice(0, currentIndex);
            currentIndex++;
            setTimeout(type, 150); // Adjust the speed of typing
        }
    }

    setTimeout(backspace, 1300); // Start backspacing after 2 seconds
});

