import './App.css';
import axios from "axios";
import {useState} from "react";
function App() {
  const [author,setauthor] = useState("Winston S. Churchill");
  const [quote,setquote] = useState("Success is not final, failure is not fatal: It is the courage to continue that counts. ");

  console.log("author",author);
  console.log("quotes",quote);

  const handleClick = () =>{
    axios.get("https://api.quotable.io/random").then((res)=>{
      setauthor(res.data.author);
      setquote(res.data.content);
    })}; 
  return (
    //We have fives boxes one for body and remaing  boxes is used within body for different purpose
    <div className="App">
     <div className='quote-box'>
     <div className='quote-text'>
      <p>{quote}</p>
     </div>
     <div className='quote-author'>
     <h3>{author}</h3>
     </div>
     <div className='quote-button'  onClick={handleClick}>
      <button>New Quote</button>
     </div>
      </div>
      <div class="flower">
    <div class="mid">
    </div>
    <div class="Petal1 p1">
    </div>
    <div class="Petal1 p2">
    </div>
    <div class="Petal1 p3">
    </div>
    <div class="Petal1 p4">
    </div>
    <div class="Petal2 p1">
    </div>
    <div class="Petal2 p2">
    </div>
    <div class="Petal2 p3">
    </div>
    <div class="Petal2 p4">
    </div>
    <div class="Petal3 p1">
    </div>
    <div class="Petal3 p2">
    </div>
    <div class="Petal3 p3">
    </div>
    <div class="Petal3 p4">
    </div>
  </div>
    </div>
  );
}

export default App;
