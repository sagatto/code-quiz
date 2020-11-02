highScoreLister.textContent = "The High Score is " + localStorage.getItem("highScore") + " points!";
highScoreInitialsLister.textContent = "The High Scoring User is " + localStorage.getItem("highScoreInitials");

var Score = 0;

//localStorage function

if(localStorage.money) money = localStorage.getItem('money');
document.getElementById("money").innerHTML = money;

//Clicking function

function moneyClick(number){
    money = parseInt(money) + 10;
    document.getElementById ("money").innerHTML = money;
    localStorage.setItem('money', money);
}

//clear data function

function clearClick(number){
    localStorage.clear();
}
