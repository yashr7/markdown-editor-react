import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

export default function App() {
  const [markdown, setMarkdown] = useState("");

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
