/* eslint-disable camelcase */
import Blockly from "blockly";

Blockly.Blocks.info = {
  init() {
    this.appendDummyInput().appendField("Info");
    this.appendStatementInput("Info").setCheck(null);
  },
};

Blockly.Blocks.license = {
  init() {
    this.appendValueInput("NAME").appendField("license");
    this.appendStatementInput("Info").setCheck(["name", "url"]);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.title = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.description = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("description");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.version = {
  init() {
    this.appendValueInput("VALUE").setCheck("Number").appendField("version");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
