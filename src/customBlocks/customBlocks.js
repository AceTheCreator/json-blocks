/* eslint-disable camelcase */
import Blockly from "blockly";
import "blockly/python";

Blockly.Blocks.new_boundary_function = {
  init() {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("Boundary Function Name"),
      "Name"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python.new_boundary_function = function (block) {
  const text_name = block.getFieldValue("Name");
  const statements_content = Blockly.Python.statementToCode(block, "Content");
  // TODO: Assemble Python into code variable.
  const code = `def ${text_name}(_object,**kwargs):\n${statements_content}\n`;
  return code;
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
