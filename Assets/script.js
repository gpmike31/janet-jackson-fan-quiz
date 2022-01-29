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

    if(timeLeft > 1){
        timeEl.textContent = timeLeft = ' seconds left'
        timeLeft--
    } else if(timeLeft === 1){
        //if timetracker is 1 then we print a different string
        timerEl.textContent = timeLeft + ' second left';
        timeLeft--
    } else{
        displayMessage()
        timerEl.textContent = '';
        clearInterval(timeInterval)
    }

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
        title: "What day and year was Janet?", 
        choices: ["May,16 1966", "May,17 1966", "May,18 1966"],
        answer: "May,16 1966"
    },
];

function displayQuestions() {
    console.log(username)
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
    if (array.choices(answer)) {
        console.log('May,16 1966');
    }
    else {
        console.log('that is incorrect');
    }

    //this increase the index number by one
    index++;

    console.log(index)

    //if there are questions left in the array ask the next question if not run a gameOver function
}

//game over function should stop the timer, and hide the questionContainer and disolay the endgame container. also make sure to display the users score. 

//once the user clicks submit button the score and username should be saved into local storage. 

form.addEventListener("submit", startGame)
submitButton.addEventListener('choices', showResults);