/* eslint-disable no-unused-vars */
import Blockly from "blockly";
import "blockly/javascript";
import { blockFormatter } from "../../common/interpreter";

Blockly.JavaScript.info = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  return "Hello world";
};

Blockly.JavaScript.title = function (block) {
  return null;
};

Blockly.JavaScript.license = function (block) {
  blockFormatter(block);
  block.check = ["name", "url"];
  block.blockType = "object";
  block.needsChildren = true;
  if (!block.counter) {
    block.counter = 0;
  }
  return null;
};

Blockly.JavaScript.text_input = function (block) {
  block.blockType = "field";
  return null;
};

Blockly.JavaScript.version = function (block) {
  return null;
};
Blockly.JavaScript.description = function (block) {
  return null;
};
Blockly.JavaScript.name = function (block) {
  return null;
};
Blockly.JavaScript.url = function (block) {
  return null;
};

Blockly.JavaScript.math_number = function (block) {
  block.blockType = "field";
  return null;
};

Blockly.JavaScript.append_mouse = function (block) {
  return null;
};
Blockly.JavaScript.rodent_list = function (block) {
  return null;
};
Blockly.JavaScript.append_dog = function (block) {
  return null;
};
