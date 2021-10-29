import Blockly from "blockly";

Blockly.Blocks.components = {
  init() {
    this.appendDummyInput().appendField("components");
    this.appendStatementInput("components").setCheck(null);
  },
};
Blockly.Blocks.channels = {
  init() {
    this.appendDummyInput().appendField("channels");
    this.appendStatementInput("channels").setCheck(null);
  },
};

Blockly.Blocks.info = {
  init() {
    this.appendDummyInput().appendField("Info");
    this.appendStatementInput("Info").setCheck(null);
  },
};
Blockly.Blocks.servers = {
  init() {
    this.appendDummyInput().appendField("servers");
    this.appendStatementInput("servers").setCheck(null);
  },
};

Blockly.Blocks.text_input = {
  init() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldTextInput("text input"), "FIELDNAME");
    this.setOutput(true, "String");
  },
};

Blockly.Blocks.float = {
  init() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldNumber(""), "FIELDNAME");
    this.setOutput(true, "Number");
  },
};

Blockly.Blocks.math_number = {
  init() {
    const validator = function (value) {
      console.log(value);
      const str = value.toString();
      if (str.match(/^-?[0-9]*[.][0-9]+$/)) {
        return str;
      }
      return value;
    };
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldNumber(validator), "FIELDNAME");
    this.setOutput(true, "Number");
  },
};
