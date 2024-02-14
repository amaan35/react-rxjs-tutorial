import { useEffect } from "react";
import "./App.css";
import { Observable } from "rxjs";

function App() {
  // defining an observer with next, error and complete functions
  const observer = {
    next: function (event) {
      console.log(event.target.value);
    },
    error: function (error) {
      console.log(error);
    },
    complete: function () {
      console.log("complete");
    },
  };

  useEffect(() => {
    // getting the button by its id in DOM
    const btn = document.getElementById("button1");
    if (btn) {
      // creating our observable without creation functions like fromEvent as we did before
      // and calling observer next function for our button click
      const observable = new Observable((obs) => {
        btn.onclick = (event) => {
          obs.next(event);
        };
      }).subscribe(observer);
    }
  }, []);

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
