import React,{useContext,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import QuizContext from '../context/quizContext';
import "./Result.css"
import Sparkle from 'react-sparkle'

const Result = () => {
    const context = useContext(QuizContext);
    const {userData,newQuestion}=context;
    let navigate = useNavigate();

    useEffect(() => {
        evaluateScore();
    }, [])
    
    let evaluateScore =()=>{
        let temp=0; 
        newQuestion.map((e)=>{
            if(e.score===1){
                temp=temp+1;
            }
            return temp;
        });
        return temp;
    }
    const handelClick = () =>{
        navigate("/");
        window.location.reload(false);
    }
    return (
        <div>
        <h2 className="text-center my-4 text-light" style={{position:'relative',width:"97%",fontWeight:"400"}}>
            {userData.name} Your Score is {`${evaluateScore()} / ${newQuestion.length}`}
            <Sparkle 
                color={"rgba(255, 255, 255, 0.616)"}
                flicker={false}
                minSize={5}
                maxSize={10}
            />
        </h2>
        <div >
        </div>
        <div className="row my-3">
        {
            newQuestion.map((element,i)=>{
                return<>
                        <div className="col-md-4 p-4">
                            <div key={i} className="card" style={{width: "auto",height:"100%"}}>
                                <div className="card-body">
                                    <div className="my-1" style={{fontWeight:"280",fontSize:"1.2rem"}}>Question {i+1}</div>
                                    <h5 className="card-title">{element.question}</h5>
                                    <ul>
                                        {element.options.map((ele,ind)=>{
                                            return <li key={ind} style={{listStyleType:"none"}}>                                    
                                                        <button className={`opBtn btn my-2 ${(element.correct_answer===ele?"border border-success bg-success text-light":"")||(element.selected_answer===ele?"border border-danger bg-danger text-light":"")}`}>{ele}</button>
                                                    </li>
                                        })}
                                    </ul>
                                    <h6>{`${element.score} / 1`}</h6>   
                                </div>
                            </div>
                        </div>
                    </>
            })
        }
        </div>
        <button className="rBtn btn btn-light w-100 text-center" onClick={handelClick}>Retake</button>
        </div>
    )
}

export default Result
