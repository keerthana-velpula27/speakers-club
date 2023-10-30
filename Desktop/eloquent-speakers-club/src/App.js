import {useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { QUESTIONS } from "./components/Questions/questions";
// import Timer from ".components/Timer/Timer";
// import './Timer.css'; 


function App() {
  const [question, setQuestion] = useState("");
  // const [sec,setSec] = useState(0);
  const generateRandomQuestion = () => {
    setQuestion(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);
  };

  return (
    <div className="App">
      <Header />
      <div className="question-container"><br /><br /><br />
      <div className="question">{question||"YOUR TOPIC IS"}</div><br /><br />
      </div>
      <div className="change">
      <button style={{ width: "150px", height: "50px",borderRadius: "6px",fontSize: "30px",background:"lightblue"}}  onClick={()=>{generateRandomQuestion()}}>generate</button> <br /><br />
      </div>
     </div>
  );
}

export default App;
