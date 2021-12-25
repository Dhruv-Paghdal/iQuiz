import {useState} from 'react'
import QuizContext from './quizContext'
 

const QuizState = (props) => {

    const decodeHTML = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    
    const [userData, setUserdata] = useState({name:"",queNum:"",category:"",difficulty:"",type:""});
    const [questions, setQuestions] = useState([]);
    const [progress, setProgress] = useState(5)
    
    const fetchApi = async ()=>{
        setProgress(40);
        const api= `https://opentdb.com/api.php?category=${userData.category}&amount=${userData.queNum}&difficulty=${userData.difficulty}&type=${userData.type}`;
        setProgress(95);
        const respose = await fetch(api);
        const json = await respose.json();
        setQuestions(json["results"]);
    }

    let newQuestion = questions.map((element)=>{
        let options=decodeHTML(element.incorrect_answers.concat(element.correct_answer));
        let newOptions = options.split(",");
        return {
            "question":decodeHTML(element.question),
            "options":shuffleArray(newOptions),
            "correct_answer":decodeHTML(element.correct_answer),
            "selected_answer":'',
            "score":''
        }
    });

    return (
        <QuizContext.Provider value={{progress,newQuestion,userData,setUserdata,fetchApi,setProgress}}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;


