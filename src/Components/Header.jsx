// assets
import ReactLogo from '../assets/reactjs-icon.svg'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-4">
      <div className="logo d-flex align-items-center">
        <img src={ReactLogo} alt="React-Logo" />
        <h1 className="name-logo">ReactFacts</h1>
      </div>
      <div className="info-header">
        <h1>React Course - Project 1</h1>
      </div>
    </header>
  );
}


export default Header;

