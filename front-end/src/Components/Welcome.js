import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { CgEnter } from "react-icons/cg";
import { ImArrowRight } from "react-icons/im";

const WelcomePage = () => {
  const { user, setUser } = useGlobalContext();
  const inputRef = useRef("");
  const alertRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
    alertRef.current.innerText = "please enter your name";
  }, []);

  const handleClick = () => {
    if (!inputRef.current.value) {
      alertRef.current.innerText = "field cannot be blank";
      setTimeout(() => {
        alertRef.current.innerText = "please enter your name";
      }, 2000);
    }

    if (inputRef.current.value) {
      let name = inputRef.current.value.trim();
      name = name[0].toUpperCase() + name.slice(1).toLowerCase();
      setUser(name);
      localStorage.setItem("user", name);
    }
  };

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
        <div className="welcome-form">
          <p ref={alertRef}></p>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>
            <ImArrowRight />
          </button>
        </div>
      </section>
    );
  }
};

export default WelcomePage;
