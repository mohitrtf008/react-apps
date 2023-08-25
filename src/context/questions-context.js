import React from "react";


const QuestionContext = React.createContext({
    questions:[],
    answers:[],
    questionAnswer:{},
    handleChangeInput: (e) => {},
    nextQuestion: (e) => {}
});

export default QuestionContext;