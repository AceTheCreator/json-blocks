/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import Blockly from "blockly";
import "blockly/javascript";

// eslint-disable-next-line consistent-return
export default function blockGenerator(selected, blocks, workspace) {
  if (blocks && Object.keys(blocks).length) {
    for (let i = 0; i < blocks.length; i++) {
      const bloc = blocks[i];
      if (bloc.name) {
        if (bloc.type === "object") {
          objectBlock(bloc.name);
        }
        if (bloc.type === "custom") {
          customBlock(bloc.name);
        }
        if (bloc.type === "string") {
          stringBlock(bloc.name);
        }
        if (bloc.type === "number") {
          numberBlock(bloc.name);
        }
        if (bloc.type === "url") {
          urlBlock(bloc.name);
        }
        if (bloc.type === "array") {
          arrayBlock(bloc.name);
        }
        // eslint-disable-next-line no-shadow
        Blockly.JavaScript[bloc.name] = function (block) {
          if (bloc.type !== "custom") {
            block.blockType = bloc.type;
          }
          block.isCustom = bloc.isCustom;
          block.check = bloc.check;
          block.connections = bloc.connections;
          block.standalone = bloc.standalone;
          return null;
        };
      }
    }
    const toolbox = {
      contents: [],
    };
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if (block.name) {
        toolbox.contents.push({
          kind: "block",
          type: block.name,
        });
      }
    }
    if (selected) {
      workspace.updateToolbox(toolbox);
    }
  }
}

function objectBlock(block) {
  Blockly.Blocks[block] = {
    init() {
      this.appendDummyInput().appendField(block);
      this.appendStatementInput(block).setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true);
    },
  };
}

function stringBlock(name) {
  Blockly.Blocks[name] = {
    init() {
      this.appendValueInput("NAME").setCheck("String").appendField(name);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    },
  };
}

function numberBlock(block) {
  Blockly.Blocks[block] = {
    init() {
      this.appendValueInput("VALUE").setCheck("Number").appendField(block);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    },
  };
}

function urlBlock(block) {
  Blockly.Blocks[block] = {
    init() {
      this.appendValueInput("VALUE").setCheck("String").appendField("url");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    },
  };
}

function arrayBlock(block) {
  Blockly.Blocks[block] = {
    init() {
      this.appendDummyInput().appendField(block);
      this.appendValueInput("LIST").setCheck("String");
      this.appendValueInput("LIST");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.contextMenu = false;
    },
  };
}

function customBlock(block) {
  Blockly.Blocks[block] = {
    init() {
      this.appendDummyInput()
        .appendField("")
        .appendField(
          new Blockly.FieldTextInput("Enter something"),
          "FIELDNAME"
        );
      this.appendStatementInput("custom").setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    },
  };
}
