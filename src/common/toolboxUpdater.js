/* eslint-disable no-unused-vars */
import { lisenceContent } from "../components/toolboxs/infoContent";
import {
  prodContent,
  variables,
  port,
} from "../components/toolboxs/serverContent";

export default function toolBoxUpdater(workspace, block) {
  let content;
  if (block.type === "license") {
    content = lisenceContent;
  }
  if (block.type === "production" || block.type === "development") {
    content = prodContent;
  }
  if (block.type === "variables") {
    content = variables;
  }
  if (block.type === "port") {
    content = port;
  }
  workspace.updateToolbox(content);
}
