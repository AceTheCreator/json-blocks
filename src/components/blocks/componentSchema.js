/* eslint-disable camelcase */
import Blockly from "blockly";

Blockly.Blocks.components = {
  init() {
    this.appendDummyInput().appendField("components");
    this.appendStatementInput("components").setCheck(null);
  },
};

Blockly.Blocks.messages = {
  init() {
    this.appendDummyInput().appendField("messages");
    this.appendStatementInput("messages").setCheck(null);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
  },
};
Blockly.Blocks.schemas = {
  init() {
    this.appendDummyInput().appendField("schemas");
    this.appendStatementInput("schemas").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.securitySchemes = {
  init() {
    this.appendDummyInput().appendField("securitySchemes");
    this.appendStatementInput("securitySchemes").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.parameters = {
  init() {
    this.appendDummyInput().appendField("parameters");
    this.appendStatementInput("parameters").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.messageTraits = {
  init() {
    this.appendDummyInput().appendField("messageTraits");
    this.appendStatementInput("messageTraits").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.operationTraits = {
  init() {
    this.appendDummyInput().appendField("operationTraits");
    this.appendStatementInput("operationTraits").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.customBlock = {
  init() {
    this.appendDummyInput()
      .appendField("")
      .appendField(new Blockly.FieldTextInput("Enter message"), "FIELDNAME");
    this.appendStatementInput("custom").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.summary = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("summary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.payload = {
  init() {
    this.appendDummyInput().appendField("payload");
    this.appendStatementInput("payload").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.traits = {
  init() {
    this.appendDummyInput().appendField("traits");
    this.appendValueInput("LIST").setCheck("String");
    this.appendValueInput("LIST");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = true;
  },
};

// Blockly.Blocks.version = {
//   init() {
//     this.appendValueInput("VALUE").setCheck("Number").appendField("version");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };
