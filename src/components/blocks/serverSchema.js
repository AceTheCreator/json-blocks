/* eslint-disable camelcase */
import Blockly from "blockly";

Blockly.Blocks.servers = {
  init() {
    this.appendDummyInput().appendField("servers");
    this.appendStatementInput("servers").setCheck(null);
  },
};

Blockly.Blocks.production = {
  init() {
    this.appendDummyInput().appendField("production");
    this.appendStatementInput("production").setCheck(null);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.development = {
  init() {
    this.appendDummyInput().appendField("development");
    this.appendStatementInput("development").setCheck(null);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.protocol = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("protocol");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
Blockly.Blocks.variables = {
  init() {
    this.appendDummyInput().appendField("variables");
    this.appendStatementInput("varialbles").setCheck(null);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.port = {
  init() {
    this.appendDummyInput().appendField("port");
    this.appendStatementInput("port").setCheck(null);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.enum = {
  init() {
    this.appendDummyInput().appendField("enum");
    this.appendStatementInput("enum").setCheck(["Number"]);
    this.setPreviousStatement(true, null);
  },
};

Blockly.Blocks.default = {
  init() {
    this.appendValueInput("VALUE").setCheck("Number").appendField("version");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.security = {
  init() {
    this.appendDummyInput().appendField("security");
    this.appendStatementInput("security").setCheck(null);
    this.setPreviousStatement(true, null);
  },
};
// Blockly.Blocks.title = {
//   init() {
//     this.appendValueInput("NAME").setCheck("String").appendField("title");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };

// Blockly.Blocks.description = {
//   init() {
//     this.appendValueInput("NAME").setCheck("String").appendField("description");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };

// Blockly.Blocks.version = {
//   init() {
//     this.appendValueInput("VALUE").setCheck("Number").appendField("version");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };
