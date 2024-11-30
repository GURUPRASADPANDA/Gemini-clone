// src/App.jsx
import React, { useState } from "react";
import Layout from "./components/Layout";
import Prompt from "./components/Prompt";
import GeminiPage from "./components/GeminiPage";

const App = () => {
  const [pageContent, setPageContent] = useState("");

  const GEMINI_PROXY_URL = "https://portal.mozz.us/gemini"; // Gemini proxy URL

  const handleNavigation = async (input) => {
    try {
      const response = await fetch(
        `${GEMINI_PROXY_URL}?url=${encodeURIComponent(input)}`
      );
  
      if (response.ok) {
        const data = await response.text(); // Gemini responses are plain text
        setPageContent(data);
      } else {
        setPageContent(`# Error\nUnable to fetch the page. Status: ${response.status}`);
      }
    } catch (error) {
      setPageContent(`# Error\nAn error occurred: ${error.message}`);
    }
  };
  

  return (
    <Layout>
      <Prompt onNavigate={handleNavigation} />
      <GeminiPage content={pageContent || "# Welcome\nEnter a URL or command to start!"} />
    </Layout>
  );
};

export default App;
