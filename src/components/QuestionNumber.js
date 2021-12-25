import React from 'react'

const QuestionNumber = (props) => {
    return (
        <div  className="my-1" style={{fontWeight:"280",fontSize:"1.2rem"}}>
             Question <span>{props.number}</span> of <span>{props.total}</span>
        </div>
    )
}

export default QuestionNumber
