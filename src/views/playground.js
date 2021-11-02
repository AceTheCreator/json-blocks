/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect, lazy, Suspense } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "blockly/javascript_compressed";
import "../components/blocks/defaultSchemas";
import "../components/blocks/componentSchema";
import "../common/defaultGenerators";
import { PlaygroundContainer, PlaygroundWrapper } from "./views.style";
import toolBoxUpdater from "../common/toolboxUpdater";
import blockUpdater from "../common/blocksUpdater";
import validateSchema, {
  blockFormatter,
  dropDownPopulator,
} from "../common/interpreter";
import topBlockUpdater from "../common/topBlockUpdater";

const Preview = lazy(() => import("./preview"));
function Playground({
  toolBox,
  view,
  setActive,
  setError,
  setErrorCount,
  error,
}) {
  // eslint-disable-next-line no-unused-vars
  const [xml, setXml] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [javascriptCode, setJavascriptCode] = useState("");
  const [previewWorkspace, setPreviewWorkspace] = useState(null);
  // eslint-disable-next-line no-unused-vars
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
    // eslint-disable-next-line no-restricted-globals
    function onClick(event) {
      const selectedBlock = workspace.getBlockById(event.blockId);
      workspace.highlightBlock("blockId");
      if (selectedBlock && selectedBlock.isCustom) {
        if (selectedBlock.parentBlock_ && !selectedBlock.blockType) {
          selectedBlock.blockType = "object";
          selectedBlock.loc = selectedBlock.parentBlock_.type;
        }
        selectedBlock.customText =
          selectedBlock.inputList[0].fieldRow[0].value_;
      }
      if (selectedBlock) {
        blockFormatter(selectedBlock);
        topBlockUpdater(selectedBlock, setActive);
        blockUpdater(selectedBlock, workspace);
        validateSchema(selectedBlock, workspace, setError, setErrorCount);
        if (
          selectedBlock.blockType === "dropDown" ||
          selectedBlock.type === "customObjDropdown"
        ) {
          dropDownPopulator(selectedBlock);
        }
      }
      if (
        selectedBlock &&
        selectedBlock.blockType &&
        selectedBlock.blockType !== "field"
      ) {
        toolBoxUpdater(workspace, selectedBlock);
      } else {
        workspace.updateToolbox(toolBox);
      }
    }
    workspace.addChangeListener(onClick);
    setPreviewWorkspace(workspace);
  }
  useEffect(() => {}, [toolBox]);
  useEffect(() => {}, [view]);
  useEffect(() => {
    console.log(error);
  }, [error]);
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
        {view === "preview" && (
          <Suspense fallback={<div>loading</div>}>
            <Preview workspace={previewWorkspace} error={error} />
          </Suspense>
        )}
      </PlaygroundWrapper>
    </>
  );
}

export default Playground;
