import "./App.css";
import { Observable } from "rxjs";

function App() {
  // defining an observer with next, error and complete functions
  const observer = {
    next: function (value) {
      console.log(value);
    },
    error: function (error) {
      console.log(error);
    },
    complete: function () {
      console.log("complete");
    },
  };

  // creating our observable without creation functions like fromEvent as we did before
  const observable = new Observable((obs)=>obs.next('next called')).subscribe(observer);

  return (
    <div className="App">
      <h1>React and rxJS tutorial</h1>
      <button id="button1" value="button1 clicked">
        button1
      </button>
      <br />
      <button id="button2" value="button2 clicked">
        button2
      </button>
    </div>
  );
}

export default App;
