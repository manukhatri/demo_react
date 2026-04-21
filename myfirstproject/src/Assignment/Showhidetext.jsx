import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  const toggleText = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleText}>
        {show ? "Hide Text" : "Show Text"}
      </button>

      {show && <h2>Hidden text-My name is Manu khatri</h2>}
    </div>
  );
}

export default ToggleText;