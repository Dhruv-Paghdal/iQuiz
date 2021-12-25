import React from 'react'

const About = () => {
    return (
        <>
        <h3 className='text-center my-5 text-light' style={{fontWeight:'400'}}>iQuiz - The Ultimate Quiz App</h3>
        <div className="card my-5" style={{width: "auto",height:"100%"}}>
            <div className="card-body">
                <ul className="ps-3" style={{fontWeight:"350",fontSize:"1.2rem",listStyleType:"circle"}}>
                   <li className="my-1">An real time quiz app that help's you to sharpen your knowledge.</li> 
                   <li className="my-1">App contains numerous amount of category like Science, Entertainment, General Knowledge and 
                       many other which unables the user's to modify the quiz according to their preference.</li>  
                   <li className="my-1">App also provides the feature to select the type of questions a particular user wishes to answer.</li>                
                </ul>
            </div>
        </div>
        <p className="my-3 text-light" style={{fontWeight:'270'}}>&copy;Designed And Developed By Dhruv Paghdal.</p>
        </>
    )
}

export default About
