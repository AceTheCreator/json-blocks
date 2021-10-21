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
    this.appendDummyInput().appendField("license");
    this.appendStatementInput("Info").setCheck(["Name", "Url"]);
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

Blockly.Blocks.append_mouse = {
  init() {
    this.appendDummyInput().appendField("Mouse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.append_dog = {
  init() {
    this.appendDummyInput().appendField("Dog");
    this.setPreviousStatement(true, "Dog");
    this.setNextStatement(true, "Dog");
  },
};

Blockly.Blocks.rodent_list = {
  init() {
    this.appendDummyInput().appendField("Rodents");
    this.appendStatementInput("RODENTS").setCheck(["Mouse", "Rat"]);
  },
};
