const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const quizTitle = document.getElementById('quiz-title')

const scoreElement = document.getElementById("score")

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

let score = 0

function showScore(){
    alert('Your score is ${score} out of ${totalNumberOfQuestions}')
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    quizTitle.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()-.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    scoreElement.classList.add('hide')
    
    setNextQuestion()
    score = 0
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}  

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct
    if(correct){
        score++
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        scoreElement.innerText = score + '/20'
        scoreElement.classList.remove('hide')
    }
}

function setStatusClass (element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Around how many nēnē are in Hawaii (2023)?',
        answers: [
            { text: '21', correct: false},
            { text: '4,200', correct: false},
            { text: '3,800', correct: true},
            { text: '3,300', correct: false}
        ]
    },{
        question: 'Nēnē are migratory birds.',
        answers: [
            { text: 'False', correct: true},
            { text: 'True', correct: false}
        ]
    },{
        question: 'Why are nēnē called "semi terrestrial"?',
        answers: [
            { text: 'Increased toe webbing', correct: false},
            { text: 'Reduced toe webbing', correct: true},
            { text: 'No toe webbing', correct: false},
            { text: 'None of the above', correct: false}
        ]
    },{
        question: 'The nēnē is the state bird.',
        answers: [
            { text: 'True', correct: true},
            { text: 'False', correct: false}
        ]
    },{
        question: 'What Phylum are nēnē part of?',
        answers: [
            { text: 'Porifera', correct: false},
            { text: 'Annelida', correct: false},
            { text: 'Echinodermata', correct: false},
            { text: 'Chordata', correct: true}
        ]
    },{
        question: 'The federal government lists the nēnē as what?',
        answers: [
            { text: 'Critically Endangered', correct: false},
            { text: 'Endangered', correct: false},
            { text: 'Threatened', correct: true},
            { text: 'Safe', correct: false}
        ]
    },{
        question: 'The state government lists the nēnē as what?',
        answers: [
            { text: 'Endangered', correct: true},
            { text: 'Critically Endangered', correct: false},
            { text: 'Threatened', correct: false},
            { text: 'Safe', correct: false}
        ]
    },{
        question: 'Who listed the nēnē as vulnerable?',
        answers: [
            { text: 'IACN', correct: false},
            { text: 'Honolulu Zoo', correct: false},
            { text: 'NatureServe', correct: false},
            { text: 'IUCN', correct: true}
        ]
    },{
        question: 'The Hawaiian Goose used to be found on all main Hawaiian Islands.',
        answers: [
            { text: 'false', correct: false},
            { text: 'true', correct: true}
        ]
    },{
        question: 'Which of the following is the nēnē currently found?',
        answers: [
            { text: 'Samoa', correct: false},
            { text: 'Kauai', correct: true},
            { text: 'Lanai', correct: false},
            { text: 'All Hawaiian Islands', correct: false}
        ]
    },{
        question: 'In the past, which of the following was the nēnēs habitat?',
        answers: [
            { text: 'Lowland dry forests', correct: true},
            { text: 'Lowland wet forests', correct: false},
            { text: 'Beaches', correct: false},
            { text: 'Savannah', correct: false}
        ]
    },{
        question: 'Which of the following was NOT one of the nēnēs habitats in the past?',
        answers: [
            { text: 'Montane Dry Forests', correct: false},
            { text: 'Temperate Forest', correct: true},
            { text: 'Shrublands', correct: false},
            { text: 'Grasslands', correct: false}
        ]
    },{
        question: 'What environment does the nēnē currently nest in?',
        answers: [
            { text: 'Savannah', correct: false},
            { text: 'Ocean', correct: false},
            { text: 'Cold Environments', correct: false},
            { text: 'Lava Rock', correct: true}
        ]
    },{
        question: 'The sexes are different in appearance.',
        answers: [
            { text: 'true', correct: false},
            { text: 'false', correct: true}
        ]
    },{
        question: 'The nēnē descended from which type of goose',
        answers: [
            { text: 'Barnacle Goose', correct: false},
            { text: 'Cackling Goose', correct: false},
            { text: 'Greylag Goose', correct: false},
            { text: 'Canada Goose', correct: true}
        ]
    },{
        question: 'How many types of geese used to be in Hawaii?',
        answers: [
            { text: '5', correct: true},
            { text: '4', correct: false},
            { text: '6', correct: false},
            { text: '3', correct: false}
        ]
    },{
        question: 'Which of the following are threats to the nēnē?',
        answers: [
            { text: 'Guinea Pigs', correct: false},
            { text: 'Indian Mongoose', correct: true},
            { text: 'Lions', correct: false},
            { text: 'Orangutan', correct: false}
        ]
    },{
        question: 'How can you help the nēnē?',
        answers: [
            { text: 'Donating to non-profits', correct: true},
            { text: 'Drive carefully', correct: true},
            { text: 'Leashing your pets', correct: true},
            { text: 'Chase them', correct: false}
        ]
    },{
        question: 'Nēnē can suffer from nutritional deficiencies.',
        answers: [
            { text: 'True', correct: true},
            { text: 'False', correct: false}
        ]
    },{
        question: 'Who is Charles Lee?',
        answers: [
            { text: 'Paleontologist', correct: false},
            { text: 'Zoologist', correct: false},
            { text: 'Education Specialist', correct: true},
            { text: 'School Teacher', correct: false}
        ]
    }
]