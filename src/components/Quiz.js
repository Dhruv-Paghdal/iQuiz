import React,{useContext,useState,useRef} from 'react';
import QuizContext from '../context/quizContext';
import Options from './Options';
import QuestionData from './QuestionData';
import QuestionNumber from './QuestionNumber';
import "./Quiz.css"


const Question = () => {

    const context = useContext(QuizContext);
    const {newQuestion}=context;
    const [count, setCount] = useState({con:0});

    const refNext = useRef(null)

    let data = newQuestion[count.con];

    const [qus, setQus] = useState(data);

    return (
        <div className="quizSection">
            <div className="card" style={{width: "23rem",height:"100%"}}>
                <div className="card-body">
                    <QuestionNumber number={(count.con)+1} total={newQuestion.length}/>
                    <QuestionData question={qus.question}/>
                    <ul style={{padding:"0%"}}>
                        <Options options={qus.options} correct={qus.correct_answer} number={(count.con)+1} refNext={refNext} total={newQuestion.length} questions={newQuestion[count.con]}/>
                    </ul>
                </div>
            </div>
            <button disabled={count.con===(newQuestion.length)-1} className="btn btn-primary mx-2 d-none" ref={refNext} onClick={()=>
                {
                    setCount({con:(count.con)+1});
                    data = newQuestion[(count.con)+1];
                    setQus(data);
                }}>Next</button>
        </div>    
    )
}

export default Question
