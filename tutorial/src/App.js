import "./App.css";
import {useEffect} from 'react'
import { fromEvent } from "rxjs";

function App() {
  useEffect(() => {

    // using fromEvent to create an observable attached with a button(producer),
    // which emits event/data as event type click, i.e. every click on this button
    // can be considered as data emitted by producer and subscribing to it using subscribe function
    // of observable returned by fromEvent, here we have no need to store the returned observable so
    // i just apply subscribe function on fromEvent 
    const btn = document.getElementById("button1");
    if (btn) {
      //using javascript to react to event
      // btn.addEventListener("click", () => console.log("clicked"));
      fromEvent(btn, 'click').subscribe(()=>console.log('clicked using fromEvent'))
    }
  }, []);

  return (
    <div className="App">
      <h1>React and rxJS tutorial</h1>
      <button id="button1">button1</button>
      <br />
      <button id="button2">button2</button>
    </div>
  );
}

export default App;
