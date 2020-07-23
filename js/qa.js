const QAs = ({ questions }) => {
    const [state, setstate] = React.useState({
        answersAreShown: []
    })
    const showAnswer = (e, index) => {
        let list = state.answersAreShown
        list[index] = !list[index]
        setstate(state => ({ ...state, answerAreShown: list }))
    }
    React.useEffect(() => {
        let listOfOpened = []
        setstate(state => ({ ...state, answersAreShown: listOfOpened }))
    }, [])
    return <React.Fragment>
        {questions.map((question, index) => <div id="answers-list" class="answers-list">
            <div class="qa">
                <span class="question">{question.q}</span>
                <div class="plus" onClick={(e) => showAnswer(e, index)}><img src="./img/plusqa.png" /></div>
            </div>
            {state.answersAreShown[index] ? <div class="answer-block"><span>{question.a}</span>
            </div> : null}

        </div>)}
    </React.Fragment>
}
