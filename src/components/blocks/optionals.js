import Blockly from "blockly";

Blockly.Blocks.name = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("name");
    this.setPreviousStatement(true, "URL");
    this.setNextStatement(true, "URL");
  },
};

Blockly.Blocks.url = {
  init() {
    this.appendValueInput("URL").setCheck("String").appendField("url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
