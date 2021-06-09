import React from "react";
import { useGlobalContext } from "../context";
import { CgEnter } from "react-icons/cg";
import { ImArrowRight } from "react-icons/im";

const WelcomePage = () => {
  const { user } = useGlobalContext();

  if (user) {
    return (
      <section>
        <div>Welcome {user}</div>
        <p>click to continue {<CgEnter />}</p>
        <small>not {user}?</small>
      </section>
    );
  }

  if (!user) {
    return (
      <section>
        <form className="welcome-form">
          <div>
            <p>please enter your name</p>
            <input type="text"></input>
            <ImArrowRight />
          </div>
        </form>
      </section>
    );
  }
};

export default WelcomePage;
