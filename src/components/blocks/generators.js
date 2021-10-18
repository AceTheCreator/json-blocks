/* eslint-disable no-unused-vars */
import Blockly from "blockly";
import "blockly/javascript";
import {
  parentSchema,
  dummySchema,
  blockFormatter,
} from "../../common/interpreter";

Blockly.JavaScript.info_schema = function (block) {
  blockFormatter(block);
  block.blockType = "object";
  if (!block.counter) {
    block.counter = 0;
  }
  parentSchema("info");
  return "Hello world";
};

Blockly.JavaScript.title = function (block) {
  dummySchema(block);
  return null;
};

Blockly.JavaScript.license = function (block) {
  blockFormatter(block);
  block.check = ["name", "url"];
  block.blockType = "object";
  console.log(block.counter);
  if (!block.counter) {
    block.counter = 0;
    console.log(block.counter);
  }
  dummySchema(block);
  return null;
};

Blockly.JavaScript.text_input = function (block) {
  block.blockType = "field";
  dummySchema(block);
  return null;
};

Blockly.JavaScript.version = function (block) {
  dummySchema(block);
  return null;
};
Blockly.JavaScript.description = function (block) {
  dummySchema(block);
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
