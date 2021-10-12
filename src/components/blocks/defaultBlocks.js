/* eslint-disable camelcase */
import Blockly from "blockly";
import "blockly/python";

// Blockly.Blocks.info_schema = {
//   init() {
//     this.appendStatementInput("DO").setCheck(null).appendField("Info");
//     this.setInputsInline(true);
//     this.setColour(315);
//   },
// };

Blockly.Blocks.append_mouse = {
  init() {
    this.appendValueInput("NAME").setCheck(null).appendField("return");
    this.setPreviousStatement(true, "Mouse");
    this.setNextStatement(true, "Mouse");
  },
};

// Blockly.Blocks.rodent_list = {
//   init() {
//     this.appendDummyInput().appendField("Rodents");
//     this.appendStatementInput("RODENTS").setCheck(["Mouse", "Rat"]);
//   },
// };

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

Blockly.JavaScript.return = function (block) {
  // Search the text for a substring.
  const operator =
    // eslint-disable-next-line eqeqeq
    block.getFieldValue("END") == "FIRST" ? "indexOf" : "lastIndexOf";
  const subString =
    Blockly.JavaScript.valueToCode(
      block,
      "FIND",
      Blockly.JavaScript.ORDER_NONE
    ) || "''";
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_MEMBER
    ) || "''";
  const code = `${text}.${operator}(${subString})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
