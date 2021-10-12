import Blockly from "blockly";

Blockly.Blocks.name = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("name");
    this.setPreviousStatement(true, "name");
    this.setNextStatement(true, "url");
  },
};

Blockly.Blocks.url = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
