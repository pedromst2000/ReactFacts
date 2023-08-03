// importing components
import Header from "./Components/Header";
import Main from "./Components/Main";
// import styles components
import "./Components/Header.css";
import "./Components/Main.css";

function App() {
  return (
    <div className="app">
      <Header nameLogo="ReactFacts" infoHeader="React Course - Project 1" />
      <Main />
    </div>
  );
}

export default App;
