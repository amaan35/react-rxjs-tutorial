import "./App.css";
import { ajax } from 'rxjs/ajax'

function App() {
  
  // receiving some dummy data using ajax operator of rxjs
  // const http$ = ajax('https://jsonplaceholder.typicode.com/posts/');
  //  const http$ = ajax.get('https://jsonplaceholder.typicode.com/posts/');
  const http$ = ajax({
    url: 'https://jsonplaceholder.typicode.com/posts/',
    method: 'GET',
    responseType: 'json'
  })

  // subscribing and displaying our response in console
  // http$.subscribe((data)=>console.log(data.response))

  //to handle errors, we can subscribe using an observer which will be an object declaring error function
  http$.subscribe({
    next: (data) => console.log(data.response),
    error: (error) => console.log(error)
  })
  return (
    <div className="App">
      <h1>React and rxJS tutorial</h1>
      <h2>see console</h2>
    </div>
  );
}

export default App;
