const questions = [
    { 
        question: "Which planet is known as the Red Planet?", 
        answers: [
            { text: "A) Venus", correct: false },
            { text: "B) Jupiter", correct: false },
            { text: "C) Mars", correct: true },
            { text: "D) Mercury", correct: false }
        ]
    },
    { 
        question: "What is the largest moon in the Solar System?", 
        answers: [
            { text: "A) Europa", correct: false },
            { text: "B) Ganymede", correct: true },
            { text: "C) Titan", correct: false },
            { text: "D) Callisto", correct: false }
        ]
    },
    { 
        question: "Who was the first human to travel into space?", 
        answers: [
            { text: "A) Yuri Gagarin", correct: true },
            { text: "B) Neil Armstrong", correct: false },
            { text: "C) Buzz Aldrin", correct: false },
            { text: "D) John Glenn", correct: false }
        ]
    },
    { 
        question: "Which spacecraft set foot on the Moon for the first time?", 
        answers: [
            { text: "A) Apollo 11", correct: true },
            { text: "B) Apollo 10", correct: false },
            { text: "C) Apollo 13", correct: false },
            { text: "D) Apollo 15", correct: false }
        ]
    },
    { 
        question: "What is the largest planet in our Solar System?", 
        answers: [
            { text: "A) Earth", correct: false },
            { text: "B) Saturn", correct: false },
            { text: "C) Jupiter", correct: true },
            { text: "D) Uranus", correct: false }
        ]
    },
    { 
        question: "Who is the founder of SpaceX?", 
        answers: [
            { text: "A) Elon Musk", correct: true },
            { text: "B) Jeff Bezos", correct: false },
            { text: "C) Mark Zuckerberg", correct: false },
            { text: "D) Bill Gates", correct: false }
        ]
    },
    { 
        question: "What is the farthest planet from the Sun?", 
        answers: [
            { text: "A) Neptune", correct: true },
            { text: "B) Uranus", correct: false },
            { text: "C) Saturn", correct: false },
            { text: "D) Jupiter", correct: false }
        ]
    },
    { 
        question: "Which astronaut spent the longest time in space?", 
        answers: [
            { text: "A) Scott Kelly", correct: true },
            { text: "B) Neil Armstrong", correct: false },
            { text: "C) Buzz Aldrin", correct: false },
            { text: "D) John Glenn", correct: false }
        ]
    },
    { 
        question: "What is the International Space Station?", 
        answers: [
            { text: "A) A space station orbiting the Moon", correct: false },
            { text: "B) A space station orbiting the Earth", correct: true },
            { text: "C) A space station orbiting Mars", correct: false },
            { text: "D) A space station orbiting Jupiter", correct: false }
        ]
    },
    { 
        question: "Who was the first woman to travel to space?", 
        answers: [
            { text: "A) Sally Ride", correct: false },
            { text: "B) Valentina Tereshkova", correct: true },
            { text: "C) Mae Jemison", correct: false },
            { text: "D) Eileen Collins", correct: false }
        ]
    },
    { 
        question: "What is the fastest spacecraft ever built?", 
        answers: [
            { text: "A) Apollo 11", correct: false },
            { text: "B) New Horizons", correct: true },
            { text: "C) Voyager 1", correct: false },
            { text: "D) Cassini", correct: false }
        ]
    },
    { 
        question: "Which planet has the most moons?", 
        answers: [
            { text: "A) Jupiter", correct: true },
            { text: "B) Saturn", correct: false },
            { text: "C) Uranus", correct: false },
            { text: "D) Neptune", correct: false }
        ]
    },
    { 
        question: "What is the largest star in the universe?", 
        answers: [
            { text: "A) Sun", correct: false },
            { text: "B) Sirius", correct: false },
            { text: "C) VY Canis Majoris", correct: true },
            { text: "D) Betelgeuse", correct: false }
        ]
    },
    { 
        question: "Who is the CEO of NASA?", 
        answers: [
            { text: "A) Bill Nelson", correct: true },
            { text: "B) Elon Musk", correct: false },
            { text: "C) Jeff Bezos", correct: false },
            { text: "D) Mark Zuckerberg", correct: false }
        ]
    },
    { 
        question: "What is the Hubble Space Telescope?", 
        answers: [
            { text: "A) A telescope on Mars", correct: false },
            { text: "B) A telescope on the Moon", correct: false },
            { text: "C) A space telescope orbiting Earth", correct: true },
            { text: "D) A telescope on Jupiter", correct: false }
        ]
    },
    { 
        question: "Which planet is known for its rings?", 
        answers: [
            { text: "A) Mars", correct: false },
            { text: "B) Saturn", correct: true },
            { text: "C) Venus", correct: false },
            { text: "D) Neptune", correct: false }
        ]
    },
    { 
        question: "What is a supernova?", 
        answers: [
            { text: "A) A new star forming", correct: false },
            { text: "B) A star exploding", correct: true },
            { text: "C) A black hole forming", correct: false },
            { text: "D) A galaxy merging", correct: false }
        ]
    },
    { 
        question: "Who was the first American to orbit Earth?", 
        answers: [
            { text: "A) Alan Shepard", correct: false },
            { text: "B) John Glenn", correct: true },
            { text: "C) Neil Armstrong", correct: false },
            { text: "D) Buzz Aldrin", correct: false }
        ]
    },
    { 
        question: "Which galaxy is Earth located in?", 
        answers: [
            { text: "A) Andromeda Galaxy", correct: false },
            { text: "B) Milky Way Galaxy", correct: true },
            { text: "C) Triangulum Galaxy", correct: false },
            { text: "D) Whirlpool Galaxy", correct: false }
        ]
    },
    { 
        question: "What is the name of the first artificial Earth satellite?", 
        answers: [
            { text: "A) Voyager 1", correct: false },
            { text: "B) Sputnik 1", correct: true },
            { text: "C) Hubble", correct: false },
            { text: "D) Apollo 11", correct: false }
        ]
    }
];
  
  let selectedQuestions = [];
  
  function selectRandomQuestions() {
    selectedQuestions = [];
    for (let i = 0; i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * questions.length);
      selectedQuestions.push(questions[randomIndex]);
      questions.splice(randomIndex, 1);
    }
  }
  
  selectRandomQuestions();
  
  const questionelement = document.getElementById("question");
  const answerbtn = document.getElementById("answerbox");
  const nextbtn = document.getElementById("next");
  const appelement = document.getElementById("app");
  
  let questionindex = 0;
  let score = 0;
  
  function startquiz() {
    questionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    appelement.classList.remove("trans");
    setTimeout(function() {
      appelement.classList.add("trans");
    }, 50);
    showquestion();
  }
  
  function showquestion(){
    resetstate();
    let current = questions[questionindex];
    let questionno = questionindex + 1;
    questionelement.innerHTML = questionno +") " + current.question;

    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",select);
    });
}

function resetstate(){
    nextbtn.style.display = "none";
    document.getElementById("zero").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("four").style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function select(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if(selectedbtn.dataset.correct ==="true"){
        selectedbtn.classList.add("correct");
        score++;
        Array.from(answerbtn.children).forEach(button => {
            button.disabled = true;
        });
    } 
    else{
        selectedbtn.classList.add("incorrect");
        Array.from(answerbtn.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("corrt");
            }
            button.disabled = true;
        });
    }
    nextbtn.style.display = "block";
}

function handlenext(){
    questionindex++;
    if(questionindex < questions.length){
        appelement.classList.remove("trans");
        setTimeout(function() {
            appelement.classList.add("trans");
        }, 50);
        showquestion();
    }
    else{
        appelement.classList.remove("trans1");
        setTimeout(function() {
            appelement.classList.add("trans1");
        }, 50);
        showscore();
    }
}

function showscore(){
    resetstate();
    questionelement.innerHTML = "<p style='text-align: center'>Your score is " +score+ " out of "+questions.length
    nextbtn.innerHTML = "play again";
    nextbtn.style.display = "block";
    if(score === 0){
        document.getElementById("zero").style.display = "block";
    }
    if(score=== 1 || score === 2){
        document.getElementById("one").style.display = "block"; 
    }
    if(score=== 3 || score === 4){
        document.getElementById("four").style.display = "block"; 
    }
}

nextbtn.addEventListener("click", () =>{
    if(questionindex < questions.length){
        handlenext();
    }
    else{
        startquiz();
    }
})

startquiz();
// show the loader initially
document.querySelector('.loader').style.display = 'flex';

// hide the loader after 2 seconds and show the quiz
setTimeout(() => {
  document.querySelector('.loader').style.opacity = 0; // fade out loader
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none'; // hide loader after fade out
  }, 500);
  
  document.querySelector('.quiz').style.display = 'block';
  document.querySelector('.quiz').style.opacity = 1; // fade in quiz
}, 1500);