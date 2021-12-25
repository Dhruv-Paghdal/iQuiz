import React,{ useContext } from 'react';
import QuizContext from '../context/quizContext';
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import "./Home.css"

const Home = () => {
    let navigate = useNavigate()
    const context=useContext(QuizContext);
    const {progress,setProgress,userData,setUserdata,fetchApi}=context;
    const {name,queNum,category,difficulty,type}=userData;

    const onChange=(event)=>{
        setUserdata({...userData,[event.target.name]:event.target.value});     
    }

    const handelClick=async (event)=>{
        event.preventDefault();
        await fetchApi();
        navigate("/quiz");
    }
    
    return (
        <div className="homeSection p-5">
           <form onSubmit={handelClick}>
                <label htmlFor="exampleInputEmail1" className="form-label text-light">Name:</label>
                <input style={{backgroundColor:"rgba(0, 0, 0, 0.500)"}} type="text" className="form-control border border-dark mb-3 text-light" placeholder="John Marker" name="name" id="name" value={name} onChange={onChange} />
                <label htmlFor="exampleInputEmail1" className="form-label text-light">Number Of Question: (Max-50)</label>
                <input style={{backgroundColor:"rgba(0, 0, 0, 0.500)"}} type="number" className="form-control border border-dark mb-3 text-light" placeholder="15" name="queNum" id="queNum" value={queNum} onChange={onChange} required />
                <label htmlFor="exampleInputEmail1" className="form-label text-light">Select Category: </label>
                <select style={{backgroundColor:"rgba(0, 0, 0, 0.500)"}} className="form-select border border-dark mb-3" aria-label="Default select example"  name="category" id="category" value={category} onChange={onChange}>
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>		
                </select>
                <label htmlFor="exampleInputEmail1" className="form-label text-light">Select Difficulty:  </label>
                <select style={{backgroundColor:"rgba(0, 0, 0, 0.500)"}} className="form-select border border-dark mb-3" aria-label="Default select example" name="difficulty" value={difficulty} onChange={onChange}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label htmlFor="exampleInputEmail1" className="form-label text-light">Select Type: </label>
                <select style={{backgroundColor:"rgba(0, 0, 0, 0.500)"}} className="form-select border border-dark mb-3" aria-label="Default select example" name="type" value={type} onChange={onChange}>
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
                <button type="submit" className="rBtn btn btn-light w-100 text-center my-2">Get Started!</button>
           </form>
           <LoadingBar
                color='#2193b0'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
        </div>
    )
}

export default Home
