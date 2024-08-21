import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
function App() {
  const [selectedContent, setSelectedContent] = useState("Home");

  const handleSelect = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="app">
      <Sidebar onSelect={handleSelect}></Sidebar>
      <MainContent content={selectedContent}></MainContent>
    </div>
  );
}

export default App;
