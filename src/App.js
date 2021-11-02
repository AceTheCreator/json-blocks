import { useState, useEffect } from "react";
import Playground from "./views/playground";
import Navbar from "./components/navigation/navbar";
import { defaultToolbox } from "./components/toolboxs/default";

function App() {
  const [toolBox, setToolbox] = useState(defaultToolbox);
  const [view, setView] = useState("playground");
  const [active, setActive] = useState(null);
  const [showError, setShowError] = useState(false);
  const [errorCount, setErrorCount] = useState(null);
  const onSetToolbox = (tool) => {
    setToolbox(tool);
  };
  useEffect(() => {
    localStorage.blockError = false;
    localStorage.errorCount = 0;
  }, []);
  useEffect(() => {}, [view]);
  return (
    <div className="App">
      <Navbar
        setToolbox={onSetToolbox}
        active={active}
        setActive={setActive}
        setView={setView}
        view={view}
        errorCount={errorCount}
        showError={showError}
      />
      <Playground
        setActive={setActive}
        setError={setShowError}
        setErrorCount={setErrorCount}
        error={showError}
        toolBox={toolBox}
        errCount={errorCount}
        view={view}
      />
    </div>
  );
}

export default App;
