import React, { useState } from "react";
import "../App.scss";

function Warning() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("Is Checked!");
    } else {
      console.log("Is NOT Checked");
    }
    setIsChecked(current => !current);
  };

  const buttonStyles = {
    opacity: isChecked ? 1 : 0,
    pointerEvents: isChecked ? 'auto' : 'none',
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <>
      <div className="container position-fixed top-50 start-50 translate-middle text-center">
        <hr />
        <p className="lead">
          If you continue on this page, then just know you are kinda <b>GAY</b>! No offense <b>BUT</b>{" "}
          you really are, how did you even find this? It is called PooPooPeePeeButtHole.netlify.app.. what were you trying to find anyway?{" "}
        </p>
        <form>
          <label htmlFor="understand">I am a <b>SINNER</b>, let me in! </label>
          <br />
          <input
            type="checkbox"
            id="understand"
            value={isChecked}
            onChange={handleChange}
          />
        </form>
        <hr />
        <br/>
        <a href="/home">
          <button className="btn btn-danger position-fixed start-50 translate-middle" style={buttonStyles} disabled={!isChecked} id="btn">I like balls</button>
        </a>
      </div>
    </>
  );
}

export default Warning;
