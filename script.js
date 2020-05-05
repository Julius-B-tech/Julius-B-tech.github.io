const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('begin quiz')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')   
    setNextQuestion( )    
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What are the fundamental block of a webpage?',
        answers: [
            {choicea:'Java/, C/, Html', correct: false }
            {choiceb:'Javascript/, Python/, Css', correct: false}
            {choicec:'Javascript/, Html/, Css', correct: true}
            {choiced:'Java/, C++/, Jquery', correct: false}
        ]
    }    
]