import React, { useState } from "react";

export default function TextExpander({
  collapsedNumWords,
  expandButtonText = "Expand",
  collapseButtonText = "Collapse",
  buttonColor = "#ff6622",
  children,
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  // Check if children is a string before using substring
  const truncatedText = expanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");
  return (
    <div style={containerStyle}>
      <p>{truncatedText}</p>
      <button onClick={toggleExpand} style={{ backgroundColor: buttonColor }}>
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
