// src/components/Prompt.jsx
import React, { useState } from "react";

const Prompt = ({ onNavigate }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate(input);
    setInput(""); // Clear input box
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <label htmlFor="prompt" style={{ marginRight: "10px" }}>
        Enter URL or Command:
      </label>
      <input
        id="prompt"
        type="text"
        value={input}
        onChange={handleInputChange}
        style={{
          padding: "5px",
          fontSize: "1rem",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          fontSize: "1rem",
          backgroundColor: "#007acc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go
      </button>
    </form>
  );
};

export default Prompt;
