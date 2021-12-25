import React from 'react';
import './Options.css';
import { useNavigate } from 'react-router-dom';

const Options = (props) => {
    const{options,correct,number,refNext,total,questions}=props;
    let{score}=props;
    let navigate =useNavigate()
    const handelClick = (id,correctAns)=>{
        refNext.current.click();
        const userAns = document.getElementById(id).innerHTML;
        if (userAns === correctAns){
            questions["selected_answer"]=correctAns;
            questions["score"]=1;
            score=score+1;
        }
        else{
            questions["selected_answer"]=userAns;
            questions["score"]=0;
        }
        if(number===total){
            navigate("/result")
        }
    }
    return (
        <>
        {
            options.map((element,i)=>{
                return  <li key={i} style={{listStyleType:"none"}}>
                            <button className="optBtn btn my-2" onClick={()=>handelClick(`btn${number}${i}`,correct)} id={`btn${number}${i}`}>{element}</button>   
                        </li>
            })
        }
        </>
    )
}

export default Options
