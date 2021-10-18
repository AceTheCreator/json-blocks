import Blockly from "blockly";

Blockly.Blocks.name = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.url = {
  init() {
    this.appendValueInput("URL").setCheck("String").appendField("url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
  console.log(block);
  // String or array length.
  const argument0 =
    Blockly.JavaScript.valueToCode(
      block,
      "VALUE",
      Blockly.JavaScript.ORDER_FUNCTION_CALL
    ) || "''";
  return [`${argument0}.length`, Blockly.JavaScript.ORDER_MEMBER];
};
