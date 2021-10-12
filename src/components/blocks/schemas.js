import Blockly from "blockly";

Blockly.Blocks.info_schema = {
  init() {
    this.appendDummyInput().appendField("Info");
    this.appendStatementInput("Info").setCheck(null);
  },
};

// Blockly.Blocks.rodent_list = {
//   init() {
//     this.appendDummyInput().appendField("Rodents");
//     this.appendStatementInput("RODENTS").setCheck(["Mouse", "Rat"]);
//   },
// };

Blockly.Blocks.license = {
  init() {
    this.appendDummyInput().appendField("license");
    this.appendStatementInput("Info").setCheck(["name", "url"]);
  },
};

Blockly.Blocks.title = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.description = {
  init() {
    this.appendValueInput("NAME").setCheck("String").appendField("description");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

Blockly.Blocks.version = {
  init() {
    this.appendValueInput("VALUE").setCheck("Number").appendField("version");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};
