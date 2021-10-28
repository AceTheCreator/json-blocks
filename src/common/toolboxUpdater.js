/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import {
  numberToolbox,
  textToolbox,
  floatToolbox,
} from "../components/toolboxs/fields";
import { lisenceContent, infoContent } from "../components/toolboxs/info";
import {
  prodContent,
  variables,
  port,
  serverContent,
} from "../components/toolboxs/servers";
import {
  messageContent,
  componentContent,
  custom,
  payloadContent,
  refContent,
  schemaContent,
  typeContent,
  propertiesContent,
} from "../components/toolboxs/components";

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
  if (block.blockType === "string" || block.type === "enum") {
    content = textToolbox;
    workspace.updateToolbox(content);
  }
  // if (block.type === "servers") {
  //   content = serverContent;
  // }
  // if (block.type === "production" || block.type === "development") {
  //   content = prodContent;
  // }
  // if (block.type === "variables") {
  //   content = variables;
  // }
  // if (block.type === "port") {
  //   content = port;
  // }
  // if (block.type === "components") {
  //   content = componentContent;
  // }
  // if (
  //   block.type === "messages" ||
  //   block.type === "schemas" ||
  //   block.type === "properties"
  // ) {
  //   content = custom;
  // }
  // if (block.type === "payload") {
  //   content = payloadContent;
  // }
  // if (block.type === "type") {
  //   content = typeContent;
  // }
  // if (block.type === "ref" && block.loc === "payload") {
  //   content = refContent;
  // }
  // if (block.type === "customBlock") {
  //   if (block.loc === "messages") {
  //     content = messageContent;
  //   }
  //   if (block.loc === "schemas") {
  //     content = schemaContent;
  //   }
  //   if (block.loc === "properties") {
  //     content = propertiesContent;
  //   }
  // }
}
