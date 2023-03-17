import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message />

      {/* 
      <Greet name="Amit" lastName="Yadav">      
      <p>This is Children props</p>
      </Greet>

      <Greet name="Ajay" lastName="Yadav">
        <button>Click Me</button>
      </Greet>
      <Greet name="Vikas" lastName="Yadav" />
      <Greet name="Ved" lastName="Yadav" />
      <Welcome name="Amit" lastName="Yadav"/>
      <Welcome name="Vikas" lastName="Yadav"/>
      <Welcome name="Ved" lastName="Yadav"/>
      <Hello/>
      */}
    </div>
  );
}

export default App;
