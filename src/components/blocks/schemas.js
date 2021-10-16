/* eslint-disable camelcase */
import Blockly from "blockly";
import "blockly/python";

Blockly.Blocks.info_schema = {
  init() {
    this.appendDummyInput().appendField("Info");
    this.appendStatementInput("Info").setCheck(null);
  },
};

Blockly.Blocks.license = {
  init() {
    this.appendDummyInput().appendField("license");
    this.appendStatementInput("Info").setCheck(["name", "url"]);
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

Blockly.Blocks.return = {
  init() {
    this.appendValueInput("NAME").setCheck(null).appendField("return");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python.return = function (block) {
  const value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  const code = `return ${value_name}\n`;
  return code;
};
