import React from "react";
import "./App.css";
import HitBar from "./Components/HitBar/HitBar";
import Response from "./Components/Response/Response";
import { ResponseContextProvider } from "./Context/responseContext";

function App() {
  return (
    <ResponseContextProvider>
      <header className="App-header">REST HIT</header>
      <div className="App">
        <HitBar />
        <Response />
      </div>
    </ResponseContextProvider>
  );
}

export default App;
