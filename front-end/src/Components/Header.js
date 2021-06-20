import { HiLightBulb } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <HiLightBulb />
      </div>
      <p className="header-title">flashCards</p>
      <small className="header-tagline">...for web devs</small>
    </header>
  );
};

export default Header;
