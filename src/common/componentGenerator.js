/* eslint-disable no-unused-vars */
import Blockly from "blockly";
import "blockly/javascript";
import { blockFormatter } from "./interpreter";

Blockly.JavaScript.components = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.messages = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};

Blockly.JavaScript.securitySchemes = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};
Blockly.JavaScript.schemas = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};
Blockly.JavaScript.parameters = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};
Blockly.JavaScript.messageTraits = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};
Blockly.JavaScript.operationTraits = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};
Blockly.JavaScript.customBlock = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  block.loc = "message";
  block.isCustom = true;
  return null;
};
Blockly.JavaScript.payload = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  return null;
};

Blockly.JavaScript.traits = function (block) {
  blockFormatter(block);
  block.blockType = "array";
  return null;
};
