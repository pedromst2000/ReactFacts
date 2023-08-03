// assets
import ReactLogo from '../assets/reactjs-icon.svg'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import PropTypes from 'prop-types';


function Header({nameLogo, infoHeader}) {
  return (
    <header className="d-flex justify-content-between align-items-center p-4 gap-5">
      <div className="logo d-flex align-items-center">
        <img src={ReactLogo} alt="React-Logo" />
        <h1 className="name-logo">{nameLogo}</h1>
      </div>
      <div className="info-header">
        <h1>{infoHeader}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  nameLogo: PropTypes.string.isRequired,
  infoHeader: PropTypes.string.isRequired
}


export default Header;

