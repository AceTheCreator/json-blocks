import {
  numberToolbox,
  textToolbox,
  floatToolbox,
} from "../components/toolboxs/fields";

export default function toolBoxUpdater(workspace, block) {
  let content;
  if (block.blockType === "number") {
    content = numberToolbox;
    workspace.updateToolbox(content);
  }
  if (block.blockType === "float") {
    content = floatToolbox;
    workspace.updateToolbox(content);
  }
  if (
    (block.blockType === "string" &&
      block.type !== "type" &&
      block.type !== "protocol") ||
    block.type === "enum" ||
    block.type === "url"
  ) {
    content = textToolbox;
    workspace.updateToolbox(content);
  }
}
