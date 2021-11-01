/* eslint-disable no-unused-vars */
import Blockly from "blockly";
import "blockly/javascript";
import { blockFormatter } from "./interpreter";

Blockly.JavaScript.info = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  block.tooltip =
    "Provides metadata about the API. The metadata can be used by the clients if needed.";
  block.checks = ["title", "version"];
  return null;
};

Blockly.JavaScript.servers = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  block.tooltip = "Provides connection details of servers.";
  return null;
};

Blockly.JavaScript.components = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  block.tooltip = "An element to hold various schemas for the specification.";
  return null;
};
Blockly.JavaScript.channels = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  block.tooltip = "The available channels and messages for the API.";
  return null;
};

Blockly.JavaScript.text_input = function (block) {
  block.blockType = "string";
  block.isField = true;
  return null;
};

Blockly.JavaScript.math_number = function (block) {
  return null;
};

Blockly.JavaScript.float = function (block) {
  return null;
};
