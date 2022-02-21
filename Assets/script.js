// create all  variables that we will manipulate with on the DOM
var timeEl= document.getElementById('time');
var timeLeft = 5;
var startContainer = document.getElementById('startContainer');
var form = document.getElementById('task-form')
var userInput = document.getElementById('userName')
var questionContainer = document.getElementById('questionContainer')
var questionTitle = document.getElementById('questionTitle')
var choices = document.getElementById('choices')
var endgame = document.getElementById('endGame')
var score = document.getElementById('score')
var submit = document.getElementById('submit')
var username;

//how long are we giving the user for the quiz?
var time=30;
var index = 0;
var timer;

// when the user inputs name and hits start we need to see the question and the options for answers, we need to start timer, hide the start container, hide the end container, display the timer on the page

function startGame(event){
    event.preventDefault()
    username = userInput.value

    timer = setInterval(function(){
        // count down and display seconds until 1
        time--;
        timeEl.textContent = time;
    }, 1000)

    // if(timeLeft > 1){
    //     timeEl.textContent = timeLeft = ' seconds left'
    //     timeLeft--
    // } else if(timeLeft === 1){
    //     //if timetracker is 1 then we print a different string
    //     timerEl.textContent = timeLeft + ' second left';
    //     timeLeft--
    // } else{
    //     displayMessage()
    //     timerEl.textContent = '';
    //     clearInterval(timeInterval)
    // }

    startContainer.setAttribute("class", "hide")
    questionContainer.removeAttribute("class")
    
    displayQuestions();
}

//questions format
var questions = [
    {
        title: "What day and year was Janet Born?", 
        choices: ["May,16 1966", "May,17 1966", "May,18 1966"],
        answer: "May,16 1966"
    },
    {
        title: "Which of these albums holds the record for the most top 5 hits according to the Billboard Hot 100 Chart?", 
        choices: ["All For You", "Control", "Rhythm Nation 1814"],
        answer: "Rhythm Nation 1814"
    },
    {
        title: "In order of birth from oldest to youngest, which numbered sibling is Janet among the Jackson Sibilings?", 
        choices: ["5", "9", "2"],
        answer: "9"
    }
];

function displayQuestions() {
    var currentQuestion= questions[index]

    questionTitle.textContent = currentQuestion.title;
//this clears out the choices container so the buttons do not stack up.
    choices.innerHTML="";
    currentQuestion.choices.forEach(function (choice) {
        var btn = document.createElement('button');
        btn.textContent = choice;
        btn.setAttribute('value',  choice);

        btn.onclick = checkAnswer

        choices.append(btn)
    })
}

function checkAnswer(){
    console.log(this.value)
    //check if the answer from our qustion array is correct. (use  a conditional to chekc if its wrong. if it is deduct time and make sure to change thevalue of the time on the page).
    // if a choice selected is correct then move to the next quest, if it is not correct then deduct time, show correct answer, then move to next uestion
    if (questions[index].answer !== this.value ) {
        time -= 2;
        timeEl.textContent = time;

        if(time<0){
            time = 0
        }
    }
  

    //this increase the index number by one
    index++;


    //if there are questions left in the array ask the next question if not run a gameOver function

    if(questions.length ===index){
        gameOver()
    }else{
        displayQuestions()
    }
}

//game over function should stop the timer, and hide the questionContainer and disolay the endgame container. also make sure to display the users score. 

function gameOver(){
    clearInterval(timer);
    questionContainer.setAttribute('class', "hide");
    endgame.removeAttribute('class')

    score.textContent = time
}

//once the user clicks submit button the score and username should be saved into local storage. 
function showResults(){
    console.log(username)
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    var userScore = {username: username, score: time}
    highscores.push(userScore)
    localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = "highscores.html"
}


form.addEventListener("submit", startGame)
submit.addEventListener('click', showResults);