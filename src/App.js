import './App.css';

import React,{useState} from "react";

function App() {

const [weight,setweight]= useState(0); // define state of weight and height to manupulate value.
const [height, setheight]=useState(0);
const [bmi,setbmi]=useState("");
const [message,setmessage]=useState("");

let calBmi=(e)=>{
  e.preventDefault();
  if(weight===0 || height===0)
  {
    alert("please enter a valid weight and height")
  }
  else{
    let bmi=weight/(height*height)
    setbmi(bmi.toFixed(1))

    if(bmi<18.5)
    {
      setmessage("you are under weight")
    }
    else if(bmi>=18.5 && bmi<25)
    {
      setmessage("You are healthy")
    }
    else{
      setmessage(" You are over weight")
    }
  }
}

let reload=()=>{
  window.location.reload()
}


  return (
    <div className="App">
      
    <div className="container">
      <h2><span>BMI</span> Calculator</h2>
      <form onSubmit={calBmi}>
        <div>
          <label>Weight (kg)</label>
          <input type="text" placeholder="Enter weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
        </div>

        <div>
          <label>Height (m)</label>
          <input type="text" placeholder="Enter height" value={height} onChange={(e)=>setheight(e.target.value)}/> 
        </div>

        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn-outline" onClick={reload}  type="submit">Reload</button>
        </div>

        <div className="center">
          <h4>Your BMI is:{bmi}</h4>
          <p>{message}</p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
