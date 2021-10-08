import { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "../components/customBlocks/defaultBlocks";
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

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="lists_create_with" id="825Sq+Q{pyvypJSj4g~`" x="80" y="-49"><mutation items="3"></mutation></block></xml>';
  function workspaceDidChange(workspace) {
    console.log(workspace);
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }
  useEffect(() => {
    console.log(toolBox);
  }, [toolBox]);
  return (
    <PlaygroundWrapper>
      <Tab setToolbox={setToolbox} />
      <PlaygroundContainer>
        <BlocklyWorkspace
          toolboxConfiguration={toolBox}
          initialXml={initialXml}
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
