import { useEffect } from "react";
import "./App.css";
import { interval, map, throttleTime } from 'rxjs'

function App() {
  // creating an observable using interval creation function
  const observable = interval(2000);

  // creating our observer
  const observer = {
    next: function(value){
      console.log(value)
    }
  }

  // connecting the two and starting execution using map and throttle time operators
  observable.pipe(map((value)=>{
    return value*2;
  }), throttleTime(2000)).subscribe(observer);
  
  return (
    <div className="App">
      <h1>React and rxJS tutorial</h1>
      <h2>see console</h2>
    </div>
  );
}

export default App;
