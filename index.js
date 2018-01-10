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
    },
    {title:'Question 4:',
    question: "This field of philosophys hallmark statement or idea is that 'Existence precedes Essence', meaning that an individual approaching philosophy’s first lens through which to think is that he or she is an individual thinking person and does not fit into a pre-defined category or role, and that they are primarily consciousness, able to create their own values and frames through which to see the world.",
    options:['Philosophical Hedonism','Essentialism','Existentialism','Self-Actualization'],
    answer:'Existentialism',
    index:3
    },
    {title:'Question 5:',
    question: 'The belief that oneself is the only being that exists, that one’s consciousness is the ultimate reality and all experiences which would persuade one otherwise are simply an illusion created by one’s consciousness is:',
    options:['Epistemological Isolationism','Dulipsism','Identificationism','Solipsism'],
    answer:'Solipsism',
    index:4
    },
    {title:'Question 6:',
    question: 'This Ancient Greek Philosopher is famous for his belief that the universe and all things are not static, but constantly in change and flux. He wrote, "We both step and do not step in the same rivers. We are and are not".',
    options:['Socrates','Heraclitus','Euripedes','Simplicius'],
    answer:'Heraclitus',
    index:5
    },
    {title:'Question 7:',
    question: 'Plato\'s "Allegory of the Cave" describes what ideas?',
    options:['The governments and societal leaders have subjected the masses to intellectual ignorance, placing them into mental caves to exploit them', 'Man does not truly understand the world the way it really is until he contemplates the true intellection forms of things around him. Until then, he lives as if in a cave watching shadows on the wall.','Cave dwelling philosophers have a distinct advantage in coming to understand the truth, because they lack the distractions of relationships and society.','Both A) and B).'],
    answer:'Man does not truly understand the world the way it really is until he contemplates the true intellection forms of things around him. Until then, he lives as if in a cave watching shadows on the wall.',
    index:6
    },
    {title:'Question 8:',
    question: 'This famous philosopher believed that when reasoning about belief and reality, there are two worlds. The noumenal world, or, actual the physical/non-physical world as it is apart from anyone’s judgement, and the phenomenal world, or, the world created by an individual’s perception. He believed that humans impose reason and belief on their sense experience to create their own phenomenal world.',
    options:['Bertrand Russel','Immanuel Kant','Augustine','Friedrich Nietzsche'],
    answer:'Immanuel Kant',
    index:7
    },
    {title:'Question 9:',
    question: 'Ludwig Wittgenstein wrote a book entitled Tractatus Logico-Philosophicus in which he in essence argued that human language ought to be mapped to structured propositions about the world and that where language could not describe actual states of affairs in the world, it should not be used. He later entirely repudiated this belief system for this idea:',
    options:['Language was inherently contradictory and it didn’t matter how it was used, because it made no sense for a being to interpolate logical pictures of reality onto reality.','Language is a tool for communicating thoughts and is defined by its use rather than by propositional logic.','Both A) and B).','The structure of his native language (German) did not allow for the expression of logical truths necessary to communicate meaningfully.'],
    answer:'Language is a tool for communicating thoughts and is defined by its use rather than by propositional logic.',
    index:8
    },
    {title:'Question 10:',
    question: 'Famous Italian philosopher and Theologian in the middle-ages known for synthesizing Christian Doctrine with Greek Philosophy:',
    options:['Jean Paul Sartre','Albert Camus','St. Thomas Aquinas','St. Augustine'],
    answer:'St. Thomas Aquinas',
    index:9
    },
];

const userData = {
    questionsWrong:0,
    questionsRight:0,
    answers:[0,0,0,0,0,0,0,0,0,0]
};



let renderQuizPage = (QuizIndex) => {
// Get the current quiz question number index and render the quiz question based on the index.
    let quizInst = QUIZOBJ[QuizIndex];
    let quizRenderData='';
    if (QuizIndex <= 8) {
    quizRenderData = `<h2 class='quiz-module-header'>${quizInst.title}</h2><h3 class='quiz-module-question'>${quizInst.question}</h3><p class='quiz-questions'><form class='quizForm'><div class='question-container'><input type='radio' name='question1' value='${quizInst.options[0]}' id='question1'><label for='question1'>A) ${quizInst.options[0]} <br></label><input type='radio' name='question1' value='${quizInst.options[1]}' id='question2'><label for='question2'>B)  ${quizInst.options[1]}<br></label><input type='radio' name='question1' value='${quizInst.options[2]}' id='question3'><label for='question3'>C) ${quizInst.options[2]} <br></label><input type='radio' name='question1' value='${quizInst.options[3]}' id='question4'><label for='question4'>D)  ${quizInst.options[3]} <br></label><br><button class='submit-answer-button'>Submit Answer</button><br><br><button class='next-button'>Next Question</button></form></div></p><p class='quiz-module-results'></p><p class='quiz-module-position-field'>Question ${quizInst.index + 1} of 10 <br><br> ${userData.questionsRight} Correct, ${userData.questionsWrong} Incorrect.</p><a href='./quiz.html'>Restart Quiz</a>`
    } else {
    quizRenderData = `<h2 class='quiz-module-header'>${quizInst.title}</h2><h3 class='quiz-module-question'>${quizInst.question}</h3><p class='quiz-questions'><form class='quizForm'><div class='question-container'><input type='radio' name='question1' value='${quizInst.options[0]}' id='question1'><label for='question1'>A) ${quizInst.options[0]} <br></label><input type='radio' name='question1' value='${quizInst.options[1]}' id='question2'><label for='question2'>B)  ${quizInst.options[1]}<br></label><input type='radio' name='question1' value='${quizInst.options[2]}' id='question3'><label for='question3'>C) ${quizInst.options[2]} <br></label><input type='radio' name='question1' value='${quizInst.options[3]}' id='question4'><label for='question4'>D)  ${quizInst.options[3]} <br></label><br><button class='submit-answer-button'>Submit Answer</button><br><br><button class='see-results'>See How You Did!</button></form></div></p><p class='quiz-module-results'></p><p class='quiz-module-position-field'>Question ${quizInst.index + 1} of 10 <br><br> ${userData.questionsRight} Correct, ${userData.questionsWrong} Incorrect.</p><a href='./quiz.html'>Restart Quiz</a>`  
    }    
    $('.quiz-module').html(quizRenderData);
    $('.quiz-module').fadeIn();
    console.log('rendered');
}


let listenForGetNextQuestion = () => {
    //increment the quiz Index and re-render the quizpage.
    $('.quiz-module').on('click','.next-button',(event) => {
        if (userData.answers[QuizIndex] === 0) {
            event.preventDefault();
            $('.quiz-module-results').text('Please Submit your Answer');
            $('.quiz-module-results').css({'font-size':'1.2em','color':'red'})
            $('.quiz-module-results').fadeIn(600);
        } else {
        event.preventDefault();
        $('.quiz-module').toggle();
        QuizIndex++;
        console.log('increase index');
        renderQuizPage(QuizIndex);
        }
    })
};


let generateResultsGreeting = () => {
    // Generates a message for the user based on how they did on the quiz
    if (userData.questionsWrong <= 3) {
        return 'Wow, Great Job!'
    } else if (userData.questionsWrong <= 5 && userData.questionsWrong < 3) {
        return "You did Ok, but there's room for improvement!"
    } else {
        return "Not so great."
    }
}

let generateResultsInfo = () => {
    return `You got ${userData.questionsRight} questions right out of ${userData.questionsRight+userData.questionsWrong} questions answered`;
}

let listenforSeeResultsButton = () => {
    $('.quiz-module').on('click','.see-results', (event) => {
        event.preventDefault();
        let userGreeting = generateResultsGreeting();
        let resultRenderData = `<h1 class='results-greeting-module'>${userGreeting}</h1><p class='results-info-module'></p><a href='./'>Return to Start</a>`
        let userStats = generateResultsInfo();
        $('.quiz-module').fadeOut();
        $('.quiz-results-module').html(resultRenderData);
        $('.results-info-module').html(userStats);
        $('.quiz-results-module').fadeIn();
    })
}

answerResults = (userMessage) => {
    // Informs user correct or incorrect answer
        $('.quiz-module-results').text(userMessage);
        $('.quiz-module-results').css('font-size','1.2em')
        $('.quiz-module-results').fadeIn(600);
        
}


addRedFontToAlerts = () => {
    $('.quiz-module-results').addClass('redfont');
}

removeRedFontFromAlerts = () => {
    $('.quiz-module-results').removeClass('redfont');
}

addGreenFontToAlerts = () => {
    $('.quiz-module-results').addClass('greenfont');
}


submitUserAnswer = () => {
    // takes input selection and compares with the Quiz Object,
    // if correct, tell user they got it correct, if wrong, tell user they got it wrong and increment wrong answer count
    $('.quiz-module').on('click', '.submit-answer-button', (event) => {
        event.preventDefault();
        if ($("input:checked").val() == undefined){
            $('.quiz-module-results').toggleClass('redfont');
                answerResults('You didn\'t select anything.');
            } else {
                let userInput = $("input:checked").val();
                $("input[type=radio]").attr('disabled', true);
                if (userInput == QUIZOBJ[QuizIndex].answer) {
                    userData.answers[QuizIndex] = userInput;
                    userData.questionsRight++;
                    // getNextQuestion();
                    let userMessage = 'Correct!'
                    removeRedFontFromAlerts();
                    addGreenFontToAlerts();
                    answerResults(userMessage);
                } else {
                    userData.answers[QuizIndex] = userInput;
                    userData.questionsWrong ++;
                    // getNextQuestion();6
                    let userMessage = `Incorrect. The correct answer is ${QUIZOBJ[QuizIndex].answer}.`
                    addRedFontToAlerts();
                    answerResults(userMessage);
                }
            }
    });
}




let setupQuiz = () => {
    renderQuizPage(QuizIndex);
    submitUserAnswer();
    listenForGetNextQuestion();
    listenforSeeResultsButton();
    window.onbeforeunload = function() {
        return "Data will be lost if you leave the page, are you sure?";
      };
}

$(setupQuiz());