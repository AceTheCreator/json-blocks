import { useState } from "react";
import Playground from "./views/playground";
import Navbar from "./components/navigation/navbar";
import { defaultToolbox } from "./components/toolboxs/default";

function App() {
  const [toolBox, setToolbox] = useState(defaultToolbox);
  const onSetToolbox = (tool) => {
    setToolbox(tool);
  };
  return (
    <div className="App">
      <Navbar setToolbox={onSetToolbox} />
      <Playground toolBox={toolBox} />
    </div>
  );
}

export default App;
