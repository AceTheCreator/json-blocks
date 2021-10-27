import { useState, useEffect } from "react";
import Playground from "./views/playground";
import Navbar from "./components/navigation/navbar";
import { defaultToolbox } from "./components/toolboxs/default";

function App() {
  const [toolBox, setToolbox] = useState(defaultToolbox);
  const [view, setView] = useState("playground");
  const onSetToolbox = (tool) => {
    setToolbox(tool);
  };
  useEffect(() => {}, [view]);
  return (
    <div className="App">
      <Navbar setToolbox={onSetToolbox} setView={setView} view={view} />
      <Playground toolBox={toolBox} view={view} />
    </div>
  );
}

export default App;
