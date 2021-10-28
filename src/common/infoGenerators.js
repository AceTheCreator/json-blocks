/* eslint-disable no-unused-vars */
import Blockly from "blockly";
import "blockly/javascript";

Blockly.JavaScript.info = function (block) {
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return "Hello world";
};

Blockly.JavaScript.title = function (block) {
  block.blockType = "string";
  return null;
};

Blockly.JavaScript.license = function (block) {
  block.check = ["name", "url"];
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.text_input = function (block) {
  block.blockType = "string";
  block.isField = true;
  return null;
};

Blockly.JavaScript.version = function (block) {
  block.blockType = "number";
  block.isField = true;
  return null;
};
Blockly.JavaScript.description = function (block) {
  block.blockType = "string";
  return null;
};
Blockly.JavaScript.name = function (block) {
  block.blockType = "string";
  return null;
};
Blockly.JavaScript.url = function (block) {
  block.blockType = "url";
  return null;
};

Blockly.JavaScript.math_number = function (block) {
  return null;
};

Blockly.JavaScript.float = function (block) {
  return null;
};
