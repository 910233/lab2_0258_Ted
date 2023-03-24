import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";

function App(){
  return(
    <div className="App">
      <div className="Home">
        <Home />
      </div>
      <div className="Todo">
        <Todo />
      </div>
    </div>
  )
}
export default App;
