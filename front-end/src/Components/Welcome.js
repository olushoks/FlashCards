import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Welcome = () => {
  const { user, setUser, setShowCollection } = useGlobalContext();
  const inputRef = useRef("");
  const alertRef = useRef("");

  useEffect(() => {
    if (!user) {
      inputRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    if (!inputRef.current.value) {
      alertRef.current.innerText = "field cannot be blank!";
      setTimeout(() => {
        alertRef.current.innerText = "please enter your name";
      }, 2000);
    }

    if (inputRef.current.value) {
      let name = inputRef.current.value.trim();
      name = name[0].toUpperCase() + name.slice(1).toLowerCase();
      setUser(name);
      localStorage.setItem("user", name);
      setShowCollection(true);
    }
  };

  const continueBtn = () => {
    setShowCollection(true);
  };

  const updateUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (user) {
    return (
      <section className="welcome-section">
        <div className="welcome">
          <p className="welcome-text">
            welcome back {user}
            <button className="btn enter-btn" onClick={continueBtn}>
              go
            </button>
          </p>
          <p className="alt-user" onClick={updateUser}>
            not {user}?
          </p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="welcome-section">
        <div className="welcome-input">
          <p className="welcome-alert" ref={alertRef}>
            please enter your name!
          </p>
          <input type="text" ref={inputRef} />
          <button className="btn enter-btn" onClick={handleClick}>
            go
          </button>
        </div>
      </section>
    );
  }
};

export default Welcome;
