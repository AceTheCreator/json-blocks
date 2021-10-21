import Blockly from "blockly";

Blockly.Blocks.name = {
  init() {
    this.appendValueInput("VALUE").setCheck("String").appendField("Name");
    this.setPreviousStatement(true, "Name");
    this.setNextStatement(true, "Name");
  },
};

Blockly.Blocks.url = {
  init() {
    this.appendValueInput("VALUE").setCheck("String").appendField("Url");
    this.setPreviousStatement(true, "Url");
    this.setNextStatement(true, "Url");
  },
};

Blockly.Blocks.string_length = {
  init() {
    this.appendValueInput("VALUE").setCheck("String").appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  },
};

Blockly.JavaScript.string_length = function (block) {
  // String or array length.
  const argument0 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_FUNCTION_CALL
    ) || "''";
  return [`${argument0}.length`, Blockly.JavaScript.ORDER_MEMBER];
};
