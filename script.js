const questions = [
    {
        question: "What is the main concept of Object-Oriented Programming (OOP)?" ,
        answers: [
            {text: "Algorithms ",correct: false},
            {text: "Objects and Classes",correct: true},
            {text: "Variables and Functions",correct: false},
            { text: "Pointers and Arrays",correct: false},
        ]
     },
     {
        question: "In OOP, what is encapsulation?",
        answers: [
            {text: " Combining data and methods that operate on the data into a single unit",correct: true},
            {text: " Breaking a program into smaller, manageable parts ",correct: false},
            {text: "Inheriting properties and behaviors from another class",correct: false},
            { text: " Storing multiple values in a single variable",correct: false},
        ]
     },
     {
        question: "What is the purpose of an interface in OOP?",
        answers: [
            {text: "To create objects directly",correct: false},
            {text: "To define a blueprint for a class",correct: true},
            {text: "To store data",correct: false},
            { text: "To encapsulate methods",correct: false},
        ]
     },
     {
        question: "Which OOP principle promotes code reusability?",
        answers: [
            {text: "Polymorphism",correct: false},
            {text: "Encapsulation",correct: false},
            {text: "Inheritance",correct: true},
            { text: " Abstraction",correct: false},
        ]
     },
     {
        question: "What is a constructor in OOP?",
        answers: [
            {text: "A method used to destroy objects",correct: false},
            {text: "A method used to create objects",correct: true},
            {text: "A variable that stores multiple values",correct: false},
            { text: " A method used for polymorphism",correct: false},
        ]
     },
     
        ];

   const  questionElement = document.getElementById("question");
   const  answerButtons =  document.getElementById("answer-buttons");
   const  nextButton =  document.getElementById("next-btn");

   let currentQuestionIndex = 0;
   let score = 0; 

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion(){
    resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1 ;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
             button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer) ;
         });  
        }
    
        function resetState(){
            nextButton.style.display = "none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
      function  selectAnswer(e){
          const selectedBtn = e.target;
          const isCorrect =  selectedBtn.dataset.correct === "true" ;
          if(isCorrect){
             selectedBtn.classList.add("correct");
             score++;
          }
          else{
            selectedBtn.classList.add("incorrect");
          }
          Array.from(answerButtons.children).forEach(button => { 
            if(button.dataset.correct === "true"){
                button.classList.add("correct");     
            }
            button.disabled = "true";
            });
            nextButton.style.display = "block" ;
        }

        function showScore(){
            resetState();
            questionElement.innerHTML =  `you scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
   } else{
    showScore();
}
}
   nextButton.addEventListener("click",() =>{
     if(currentQuestionIndex < questions.length){
             handleNextButton();        
     }
     else{
        startQuiz();
     }
   } )
      startQuiz();
