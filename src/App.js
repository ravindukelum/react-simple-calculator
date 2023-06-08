import "./App.css";

import { useState } from "react";

function App() {

  const [score,setScore]=useState('10');
  const [comment,setComment]=useState("");

  const handleComment=(e)=>{
    e.preventDefault();
    if(Number(score)<=5 && comment.length<=10){
      alert("Please provide a comment explaining why the experience was poor,");
      return;
    }
  }

  return (
    <div className="App">
      
      <form onSubmit={handleComment}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score:{score}⭐</label>
            <input
              type="range"
              min="0"
              max="10"
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea value={comment} onChange={e=> setComment(e.target.value)}/>

          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
