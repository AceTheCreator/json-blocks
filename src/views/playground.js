import { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
// import Blockly from "blockly";
import "../components/blocks/schemas";
import "../components/blocks/fields";
import "../components/blocks/optionals";
import Tab from "../components/navigation/tab";
import { PlaygroundContainer, PlaygroundWrapper } from "./views.style";
import { defaultToolbox } from "../components/toolboxs/default";

function Playground() {
  // eslint-disable-next-line no-unused-vars
  const [xml, setXml] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [javascriptCode, setJavascriptCode] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [toolBox, setToolbox] = useState(defaultToolbox);

  function workspaceDidChange(workspace) {
    console.log(workspace);
  }
  useEffect(() => {}, [toolBox]);
  return (
    <PlaygroundWrapper>
      <Tab setToolbox={setToolbox} />
      <PlaygroundContainer>
        <BlocklyWorkspace
          toolboxConfiguration={toolBox}
          className="fill-height"
          workspaceConfiguration={{
            zoom: {
              controls: true,
              wheel: true,
              startScale: 1.0,
              maxScale: 3,
              minScale: 0.3,
              scaleSpeed: 1.2,
              pinch: true,
            },
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={setXml}
        />
      </PlaygroundContainer>
    </PlaygroundWrapper>
  );
}

export default Playground;
