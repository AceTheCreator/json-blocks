/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "blockly/javascript_compressed";
import "../components/blocks/schemas";
import "../components/blocks/generators";
import "../components/blocks/fields";
import "../components/blocks/optionals";
import { PlaygroundContainer, PlaygroundWrapper } from "./views.style";
import toolBoxUpdater from "../common/toolboxUpdater";

// eslint-disable-next-line react/prop-types
function Playground({ toolBox }) {
  // eslint-disable-next-line no-unused-vars
  const [xml, setXml] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [javascriptCode, setJavascriptCode] = useState("");
  // eslint-disable-next-line no-unused-vars

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
    // eslint-disable-next-line no-restricted-globals
    function onClick(event) {
      toolBoxUpdater(event, workspace, toolBox);
    }
    workspace.addChangeListener(onClick);
  }
  useEffect(() => {}, [toolBox]);
  return (
    <>
      <PlaygroundWrapper>
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
    </>
  );
}

export default Playground;

// const workspace = Blockly.inject("blocklyDiv", {
//   plugins: {
//     toolbox: ContinuousToolbox,
//     flyoutsVerticalToolbox: ContinuousFlyout,
//     metricsManager: ContinuousMetrics,
//   },
//   zoom: {
//     controls: true,
//     wheel: true,
//     startScale: 1.0,
//     maxScale: 3,
//     minScale: 0.3,
//     scaleSpeed: 1.2,
//     pinch: true,
//   },
//   grid: {
//     spacing: 20,
//     length: 3,
//     colour: "#ccc",
//     snap: true,
//   },
//   toolbox: infoToolbox,
//   trashcan: true,
//   // ... your other options here ...
// });
