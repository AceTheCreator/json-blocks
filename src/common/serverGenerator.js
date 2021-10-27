import Blockly from "blockly";
import "blockly/javascript";

Blockly.JavaScript.servers = function (block) {
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.production = function (block) {
  block.standalone = true;
  block.check = ["protocol", "url", "description", "variables", "security"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.development = function (block) {
  block.standalone = true;
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
  block.check = ["port"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.port = function (block) {
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

Blockly.JavaScript.enum = function (block) {
  block.blockType = "array";
  return null;
};
