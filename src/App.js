import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionalClick from "./components/FunctionalClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Columns from "./components/Columns";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="App">
      {/* <PureComp />  */}
      {/* <ParentComp /> */}
      <RefsDemo />
      {/* <Columns /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Sucess</h1> */}
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} />       */}
      {/* <Inline /> */}

      {/* <Greet name="Ved" lastName="Yadav" /> */}
      {/* <Welcome name="Amit" lastName="Yadav"/> */}
      {/* <FunctionalClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind/> */}
      
      {/* 
      <Greet name="Amit" lastName="Yadav">      
      <p>This is Children props</p>
      </Greet>

      <Greet name="Ajay" lastName="Yadav">
        <button>Click Me</button>
      </Greet>
      <Greet name="Vikas" lastName="Yadav" />
      <Welcome name="Vikas" lastName="Yadav"/>
      <Welcome name="Ved" lastName="Yadav"/>
      <Hello/>
      */}
    </div>
  );
}

export default App;
