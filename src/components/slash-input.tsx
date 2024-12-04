import { useState } from "react";

const SlashInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if slash is the last character
    if (value.endsWith("/")) {
      const rect = e.target.getBoundingClientRect();
      const selectionStart = e.target.selectionStart;
      const lineHeight = 24; // Adjust based on your input font size

      setCursorPosition({
        x: rect.left + selectionStart * 7, // Adjust width per character
        y: rect.bottom + window.scrollY,
      });
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option) => {
    // Remove the slash and append the selected option
    const updatedValue = inputValue.replace(/\/$/, "") + option;
    setInputValue(updatedValue);
    setShowOptions(false);
  };

  return (
    <div className="slash-input-container" style={{ position: "relative" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="slash-input"
        placeholder="Type '/' to see options..."
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      {showOptions && (
        <div
          className="options-dropdown"
          style={{
            position: "absolute",
            top: cursorPosition.y + 10,
            left: cursorPosition.x,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="option-item"
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlashInput;
