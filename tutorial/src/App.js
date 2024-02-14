import { useEffect } from "react";
import "./App.css";
import { interval, map } from 'rxjs'

function App() {
  // creating an observable using interval creation function
  const observable = interval(2000);

  // creating our observer
  const observer = {
    next: function(value){
      console.log(value)
    }
  }

  // connecting the two and starting execution
  observable.pipe(map((value)=>{
    return value*2;
  })).subscribe(observer);
  
  return (
    <div className="App">
      <h1>React and rxJS tutorial</h1>
      <h2>see console</h2>
    </div>
  );
}

export default App;
