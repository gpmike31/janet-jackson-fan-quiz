function highscores () {
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.sort((a, b) => b.score -  a.score);

    for (let i = 0; i < highscores.length; i++) {
       
      var li = document.createElement('li')
        li.textContent = highscores[i].username + ' - ' + highscores[i].score;

        var scores = document.getElementById ('scores')
            scores.append(li)
    }
}

highscores();