import Blockly from "blockly";
import "blockly/javascript";
import { blockFormatter } from "./interpreter";

Blockly.JavaScript.servers = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.production = function (block) {
  blockFormatter(block);
  block.check = ["protocol", "url", "description", "variables", "security"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.development = function (block) {
  blockFormatter(block);
  block.check = ["protocol", "url", "description", "variables", "security"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.protocol = function () {
  return null;
};
Blockly.JavaScript.variables = function (block) {
  blockFormatter(block);
  block.check = ["port"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.port = function (block) {
  blockFormatter(block);
  block.check = ["description", "default", "enum"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.default = function () {
  return null;
};

// Blockly.JavaScript.security = function (block) {
//   blockFormatter(block);
//   block.blockType = "object";
//   block.needsChildren = true;
//   if (!block.counter) {
//     block.counter = 0;
//   }
//   return null;
// };
