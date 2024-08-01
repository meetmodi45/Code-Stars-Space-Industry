const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            
            {text: "A) "+" "+" "+" "+"Venus", correct: false},
            {text: "B)  Jupiter", correct: false},
            {text: "C)  Mars", correct: true},
            {text: "D)  Mercury", correct: false},

         ]
    },

    {
        question: "What is the largest moon in the Solar System?",
        answers: [
            
            {text: "A)  Europa", correct: false},
            {text: "B)  Ganymede", correct: true},
            {text: "C)  Titan", correct: false},
            {text: "D)  Callisto", correct: false},

        ]
    },
    {
        question: "Who was the first human to travel into space?",
        answers: [
            
            {text: "A)  Yuri Gagarin", correct: true},
            {text: "B)  Neil Armstrong", correct: false},
            {text: "C)  Buzz Aldrin", correct: false},
            {text: "D)  John Glenn", correct: false},

        ]
    },
    {
        question: "Which spacecraft set foot on the Moon for the first time?",
        answers: [
            {text: "A)  Apollo 11", correct: true},
            {text: "B)  Apollo 10", correct: false},
            {text: "C)  Apollo 13", correct: false},
            {text: "D)  Apollo 15", correct: false},

        ]
    }

];

const questionelement = document.getElementById("question");
const answerbtn = document.getElementById("answerbox");
const nextbtn = document.getElementById("next");
const appelement = document.getElementById("app");


let questionindex = 0;
let score = 0;

function startquiz(){
    questionindex  = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    appelement.classList.remove("trans");
setTimeout(function() {
    // Add the "trans" class after a short delay
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
    });}
   
    nextbtn.style.display = "block";
    
}
function handlenext(){
   
    questionindex++;
    if(questionindex < questions.length){
        appelement.classList.remove("trans");
setTimeout(function() {
    // Add the "trans" class after a short delay
    appelement.classList.add("trans");
}, 50);
        showquestion();
    }
    else{
        appelement.classList.remove("trans1");
setTimeout(function() {
    // Add the "trans" class after a short delay
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