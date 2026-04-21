import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
  };

  return (
    <div style={styles}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>

      <button onClick={toggleTheme} style={{ padding: "10px 20px" }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;