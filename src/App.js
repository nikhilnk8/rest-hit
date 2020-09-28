import React from "react";
import "./App.css";
import HitBar from "./Components/HitBar/HitBar";
import Options from "./Components/Options/Options";
import Response from "./Components/Response/Response";
import { ResponseContextProvider } from "./Context/responseContext";
import { RequestContextProvider } from "./Context/requestContext";

function App() {
  return (
    <ResponseContextProvider>
      <RequestContextProvider>
        <header className="App-header">REST HIT</header>
        <div className="App">
          <HitBar />
          <Options />
          <Response />
        </div>
      </RequestContextProvider>
    </ResponseContextProvider>
  );
}

export default App;
