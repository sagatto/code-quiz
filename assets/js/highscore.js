highScoreLister.innerHTML = "The High Score is " + localStorage.getItem("highScore") + " points";
highScoreInitialsLister.innerHTML = "The High Scoring User is " + localStorage.getItem("highScoreInitials");

// clear score
function clearClick(number){
    localStorage.clear();
}
document.getElementById('resetHighScores').addEventListener("click", clearClick);
