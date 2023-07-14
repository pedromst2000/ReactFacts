import List from "./List";
import "./List.css";
import BackgroundLogo from "../assets/backgroundLogo.svg";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <main>
      <h1 className="main-header">Fun facts about React</h1>
      <div className="second-section d-flex flex-row justify-content-between align-items-center">
        <List />
        <img src={BackgroundLogo} alt="React Logo" />
      </div>
    </main>
  );
}

export default Main;
