import { GiSoccerField } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { GiSoccerKick } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <GiSoccerField />
      <GiSoccerKick />
      <GiSoccerBall />
      <p>soccer flash</p>
    </header>
  );
};

export default Header;
