import React from 'react'
import QuestionContext from "./questions-context";
import { useState } from 'react';
import { useEffect } from 'react';
import questionsArray from '../constants/QuestionsArray';

export function QuestionProvider(props) {

    const [questions,setQuestions] = useState([]);
    const [answers,setAnswers] = useState([]);
    const [questionAnswer,setQuestionAnswer] = useState({});    

    useEffect(()=>{
        setQuestions(questionsArray);
        setQuestionAnswer(questionsArray[0]);
    },[])

    const handleChangeInput = (event) => {
        setQuestionAnswer({
            ...questionAnswer,
            answer:event.target.value
        })
    }

    const nextQuestion = (event) => {
        event.preventDefault();
        questions.map((que) => {
            if(que.resumeFieldId === questionAnswer.resumeFieldId){
                setAnswers([
                    ...answers,
                    {...que, answer:questionAnswer.answer}
                ])
            }
        })

        questions.map((que, index) => {
            if(index <= questions.length){
                if(que.resumeFieldId === questionAnswer.resumeFieldId){
                    setQuestionAnswer(questions[index+1])
                }
            }
        })
    }
    
    const quesCtx = {
        questions,
        answers,
        questionAnswer,
        handleChangeInput,
        nextQuestion
    }

    return (
        <QuestionContext.Provider value={quesCtx}>
            {props.children}
        </QuestionContext.Provider>
    )
}

