import logo from './image/Chef Claude Icon.png';
// import HeroSection from './HeroSect';

function Header(prop) {
    console.log(prop)
  return (
    <header className="header"
    aria-label="header"
    >
            <img src={logo} alt="logo" />
            <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;