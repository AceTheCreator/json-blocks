import Blockly from "blockly";

Blockly.Blocks.text_input = {
  init() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldTextInput("text input"), "FIELDNAME");
    this.setOutput(true, "String");
  },
};

Blockly.Blocks.math_number = {
  init() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldNumber(100, 0, 100, 10), "FIELDNAME");
    this.setOutput(true, "Number");
  },
};
