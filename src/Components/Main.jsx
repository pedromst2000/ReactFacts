import List from "./List";
import "./List.css";
import BackgroundLogo from "../assets/backgroundLogo.svg";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {

  const tags = [
    { id: 1, content: "Was first released in 2013" },
    { id: 2, content: "Was originally created by Jordan Walke" },
    { id: 3, content: "Has well over 100K stars on GitHub" },
    { id: 4, content: "Is maintained by Facebook" },
    { id: 5, content: "Powers thousands of enterprise apps, including mobile apps" },
  ];
  
  return (
    <main>
      <div className="main-content">
        <h1 className="main-header">Fun facts about React</h1>
        <div className="second-section d-flex flex-row justify-content-between align-items-center">
          <List 
            tags={tags}
          />
          <img src={BackgroundLogo} alt="React Logo" />
        </div>
      </div>
    </main>
  );
}

export default Main;
