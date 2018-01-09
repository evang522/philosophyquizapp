/* 
Psuedocode:

This app needs to: 

1. Present users with questions which they can navigate through in a 
carousel manner. 

2. As the user selects the answer and clicks submit, the app must let them
known if their answer was correct or not. 

3. As the user selects the answer and clicks submit, the app must
store the user's input so that the total amount of right and wrong answers
can be calculated at the end of the quiz. 

*/
// Set global variable for current quiz question that will be incremented or
// decremented as necessary. 
let QuizIndex = 0;

const QUIZOBJ = [
    {title:'Question 1:',
    question:'Which philosopher is famously quoted as saying, "I am the wisest man alive, for I know one thing, and that is that I know nothing"?',
    options:['Thomas Aquinas','Plato','Thomas Nagel','Socrates'], 
    answer:'Socrates',
    index:0
    },
    {title:'Question 2:',
    question: 'Widely regarded as the Father of Epistemology and Western Philosophy in general, this philosopher who lived in the 17th century attempted to find a basis upon which man could construct his belief systems.When he started his "Meditations" with an attempt to doubt everything about which he could not be completely certain, he concluded, "I think, therefore I am".',
    options:['Socrates','Jacques Derrida','Renee Descartes','David Hume'],
    answer:'Renee Descartes',
    index:1
    },
    {title:'Question 3:',
    question: 'When the truth of premise A depends on premise B being true, premise B is said to be:',
    options:['An Aseitic Truth','A Necessary Condition','A Sufficient Condition','A Subtruth'],
    answer:'A Necessary Condition',
    index:2
    }
];

const userData = {
    questionsWrong:0,
    answers:[]
};



let renderQuizPage = (QuizIndex) => {
// Get the current quiz question number index and render the quiz question based on the index.
    let quizInst = QUIZOBJ[QuizIndex];
    let quizRenderData = `<h2 class='quiz-module-header'>${quizInst.title}</h2><h3 class='quiz-module-question'>${quizInst.question}</h3><p class='quiz-questions'><form class='quizForm'><input type='radio' name='question1' value='${quizInst.options[0]}' id='question1'><label for='question1'>A) ${quizInst.options[0]} <br></label><input type='radio' name='question1' value='${quizInst.options[1]}' id='question2'><label for='question2'>B)  ${quizInst.options[1]}<br></label><input type='radio' name='question1' value='${quizInst.options[2]}' id='question3'><label for='question3'>C) ${quizInst.options[2]} <br></label><input type='radio' name='question1' value='${quizInst.options[3]}' id='question4'><label for='question4'>D)  ${quizInst.options[3]} <br></label><br><button class='next-button'>Next Question</button></form></p><p class='quiz-module-results'></p><p class='quiz-module-position-field'>Question ${quizInst.index + 1} of 10</p>`
    $('.quiz-module').html(quizRenderData);
}


let processNextQuestion = () => {
    //increment the quiz Index and re-render the quizpage.
        QuizIndex++;
        renderQuizPage(QuizIndex);
};

answerResults = () => {
    // Informs user correct or incorrect answer
    $('.quiz-module-results').text(userMessage);
}


submitUserAnswer = () => {
    // takes input selection and compares with the Quiz Object,
    // if correct, tell user they got it correct, if wrong, tell user they got it wrong and increment wrong answer count
    $('.quiz-module').on('click', '.next-button', (event) => {
        event.preventDefault();
        let userInput = $("input:checked").val();
        // console.log(userInput);
        // console.log(QUIZOBJ[QuizIndex].answer)
        if (userInput == QUIZOBJ[QuizIndex].answer) {
            console.log('correct!');
            userData[QuizIndex] = userInput;
            processNextQuestion();
        } else {
            console.log('incorrect');
            userData[QuizIndex] = userInput;
            userData.questionsWrong ++;
            processNextQuestion();
        }
        console.log(QUIZOBJ);
        console.log(userData);
    });
}




let setupQuiz = () => {
    renderQuizPage(QuizIndex);
    submitUserAnswer();
    answerResults();
}

$(setupQuiz());