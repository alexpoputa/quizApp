// Variables
var position = 0,
    test,
    testStatus,
    question,
    choice,
    choices,
    answerA,
    answerB,
    answerC,
    correct = 0;

// Array with questions, answers
var questions = [
    ["Which chess piece is of the lowest theoretical value?", "Knight", "Bishop", "Pawn", "C"],
    ["What is the longest river in the world when NOT adding estuaries to the equation?", "Amazon", "Nile", "Zambezi", "B"],
    ["Who was the Greek goddess associated with the moon?", "Artemis", "Neptune", "Apollo", "A"],
    ["What is the nickname of jazz trumpeter Louis Armstrong?", "Jazz", "Al'arm", "Satchmo", "C"],
    ["What number is represented by the letters XIX in Roman numerals?", "16", "19", "21", "B"],
    ["Name the famous 'ghost' ship: Marie ___?", "Celeste", "Rose", "Tudor", "A"],
    ["Name the large, juicy,yellow-skinned citrus fruit of the West Indies?", "Pug", "Ugli", "Pretti", "B"],
    ["Cirrus or cumulus are examples of ___?", "Bones in the human body", "Clouds", "Roman Gods", "B"],
    ["Whose boxing strategy was 'Float like a butterfly, sting like a bee'?", "Joe Frazier", "Muhammad Ali", "Mike Tyson", "B"],
    ["Who was the first Roman Emperor?", "Julius", "Marcus", "Augustus", "C"],
    ["Who said, 'It's better to be looked over than overlooked'?", "Rebecca West", "Dorothy Parker", "Mae West", "C"],
    ["Which country of the following in Africa is totally land-locked?", "Botswana", "Sudan", "Gabon", "A"],
    ["Former 'James Bond', Timothy Dalton was born in ___?", "Wales", "Scotland", "England", "A"],
    ["Which guitar legend was a former paratrooper who made 26 jumps with the 'Screaming Eagles' the elite 101 airborne division?", "Eric Clapton", "Jimi Hendrix", "Francis Rossi", "B"],
    ["Who said, 'How inappropriate to call this planet Earth when it is clearly Ocean'?", "Arthur C. Clarke", "Jacques Cousteau", "Patrick Moore", "A"]
];

function _(x) {
    return document.getElementById(x);
}

// Function to print the questions and answers
function printQuestions() {
    test = _("test");
    testL = _("testL");
    // At the end of questions
    if (position >= questions.length) { // create in our div a <h> element that says how many correct answers we got
        test.innerHTML = "<h2>You got " + correct + " out of " + questions.length + " questions correct!</h2>";
        test.innerHTML += "<button onclick='resetQuiz()'>Reset Quiz</button>";
        // At the end of the Quiz,confirm that the test is complete
        _("testStatus").innerHTML = "COMPLETE!";
        position = 0;
        correct = 0;
        return false;
    }
    _("testStatus").innerHTML = "Question " + (position + 1) + " of " + questions.length;
    // Get questions/answers values and put them into variables
    question = questions[position][0];
    answerA = questions[position][1];
    answerB = questions[position][2];
    answerC = questions[position][3];
    test.innerHTML = "<h3>" + question + "</h3>"
    test.innerHTML += "<input type='radio' name='choices' id='inputType' value='A'>" + answerA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>" + answerB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>" + answerC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

// Reset Quiz function
function resetQuiz() {
    printQuestions();
}

function checkAnswer() {
    // Put all input elements with name of "choices" into an array called "choices"
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            // If the User has checked an answer,take that answer and put it in "choice" variable
            choice = choices[i].value;
        }
    }
    // If the User chose the correct answer, increment the score
    if (choice == questions[position][4]) {
        correct++;
    }
    // Go to the next question if they answered correctly to the previous one
    position++
    // After every correct answer,start the function again
    printQuestions();
};

window.addEventListener("load", printQuestions, false);
