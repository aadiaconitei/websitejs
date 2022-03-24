document.addEventListener("DOMContentLoaded", function (event) {
    function game() { // constructorul
        this.computerInput = function () {
            this.computerChoice = Math.random();
            if (this.computerChoice < 0.34) {
                return this.computerChoice = "piatră";
            } else if (this.computerChoice <= 0.67) {
                return this.computerChoice = "hârtie";
            } else {
                return this.computerChoice = "foarfecă";
            };
        };

        this.compare = function (choice1, choice2) {
            // choice 1 = userChoice
            // choice 2 = computerChoice
            if (choice1 === choice2) {
                return "Egalitate!";
            }
            else if (choice1 === "piatră") {
                if (choice2 === "foarfecă") {
                    scoreCount('add');
                    return "piatra câstigă";

                } else {
                    scoreCount('minus');
                    return "hârtia câstigă";

                }
            }
            else if (choice1 === "hârtie") {
                if (choice2 === "piatră") {
                    scoreCount('add');
                    return "hârtia câstigă";

                } else {
                    scoreCount('minus');
                    return "foarfeca câstigă";

                }
            }
            else if (choice1 === "foarfecă") {
                if (choice2 === "piatră") {
                    scoreCount('add');
                    return "piatra câstigă";

                } else {
                    scoreCount('minus');
                    return "foarfeca câstigă";

                }
            }
        };
    };

    function symbol(choice) {
        if (choice == "hârtie") {
            return "<img src='img/hartie.jpg' style='width: 100%;'/>";
        }
        else if (choice == "foarfecă") {
            return "<img src='img/foarfeca1.jpg' style='width: 100%;'/>";
        }
        else {
            return "<img src='img/piatra.jpg' style='width: 100%;'/>";
        }
    }

    function scoreCount(newScore) {
        if (newScore == "add") {
            score = score + 1;
        } else {
            if (score > 0) {
                score = score - 1;
            }
        }
        scoreDisplay.innerHTML = "Scorul tau: " + score;
    }

    var e = (new Date).getFullYear();
    var copyrightYear = document.getElementById("date");
    copyrightYear.innerHTML = e;



    var game = new game();
    var userChoice = "";
    var computerChoice = "";
    var result = "";
    var buttons = document.getElementsByClassName("button");
    var playerChoiceDisplay = document.getElementById("player_choice");
    var computerChoiceDisplay = document.getElementById("computer_choice");
    var resultDisplay = document.getElementById("result");
    var score = 0;
    var scoreDisplay = document.getElementById("score_display");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            userChoice = this.id;
            var choiceGraphic = symbol(userChoice);
            playerChoiceDisplay.innerHTML = choiceGraphic;
            //console.log("user: " + userChoice);
            computerChoice = game.computerInput();
            var choiceGraphic = symbol(computerChoice);
            computerChoiceDisplay.innerHTML = choiceGraphic;
            //console.log("computer: " + computerChoice);
            result = game.compare(userChoice, computerChoice);
            //console.log(result);
            resultDisplay.innerHTML = result;
        }, false);
    }

});