import React, { useEffect } from "react";
import { useState } from "react";

function Toggle({ setToggle, toggle_default }) {
  const [toggleOn, SetToggleOn] = useState(toggle_default);

  // useEffect(() => {
  //   SetToggleOn(toggle_default);
  //   // setToggle(toggle_default);
  // }, []);

  function ToggleOff() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        fill="#e8eaed"
      >
        <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z" />
      </svg>
    );
  }

  function ToggleOn() {
    return (
      <svg
        // style={{ background: "var(--success-color)" }}
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        fill="var(--primary-color)"
        style={{ fill: "var(--primary-color)" }}
      >
        <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm400-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
      </svg>
    );
  }

  return (
    <div
      style={{ width: "40px", height: "40px" }}
      onClick={() => {
        let toggle = toggleOn;
        SetToggleOn(!toggle);
        setToggle && setToggle(!toggle);
      }}
    >
      {toggleOn ? <ToggleOn /> : <ToggleOff />}
    </div>
  );
}

export default Toggle;
