import { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Live Input Display</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px" }}
      />

      <h2>You typed: {text}</h2>
    </div>
  );
}

export default LiveInput;