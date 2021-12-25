import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from "./components/About";
import AppNavbar from './components/AppNavbar';
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import QuizState from "./context/QuizState";

function App() {
  return (
    <QuizState>
    <Router>
      <div className="app">
      <AppNavbar/>
      <div className="ctr">
        <div className="container">
        <Routes>
            <Route exact path="/" element={<div className="my-2"><Home /></div>} />
            <Route exact path="/about" element={<div className="my-2"><About /></div>} />
            <Route exact path="/quiz" element={<div className="my-2"><Quiz /></div>} />
            <Route exact path="/result" element={<div className="my-2"><Result /></div>} />
        </Routes>
        </div>
        </div>
      </div>
    </Router>
    </QuizState>
  );
}

export default App;
