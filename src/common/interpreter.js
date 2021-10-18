/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import spec from "../data/spec";
import dummy from "../data/dummy";

export function blockFormatter(block) {
  const { counter } = block;
  if (block.blockType === "object") {
    if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
      const blocks = block.childBlocks_;
      const currentBlock = blocks[counter];
      const currentChildBlock = currentBlock.childBlocks_;
      if (currentBlock.blockType !== "object") {
        for (let i = 0; i < currentChildBlock.length; i++) {
          if (currentChildBlock[i].blockType !== "field") {
            const holder = currentChildBlock[i];
            currentChildBlock.splice(i, 1);
            block.childBlocks_.push(holder);
            block.counter += 1;
          }
        }
      }
    }
  }
  console.log(block);
}

export function parentSchema(data) {
  if (
    data === "info" ||
    data === "servers" ||
    data === "channels" ||
    data === "components"
  ) {
    spec[data] = {};
    console.log(spec);
  }
}

function childSchema(blocks, block) {
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].check === "field") {
      const value = {};
      value[block.type] = blocks[i].inputList[0].fieldRow[0].value_;
      return value;
    }
  }
}

export function dummySchema(block) {
  if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
    const blocks = block.childBlocks_;
    if (Array.isArray(block.check)) {
      const checks = block.check;
      for (let i = 0; i < checks.length; i++) {
        for (let j = 0; i < blocks.length; i++) {
          if (blocks[j].type === checks[j]) {
            const a = childSchema(blocks[j].childBlocks_, blocks[j]);
            dummy[block.type] = a;
          }
        }
      }
    } else {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].check === "field") {
          dummy[block.type] = blocks[i].inputList[0].fieldRow[0].value_;
          break;
        }
      }
    }
  }
}

// export function dummySchema(block) {
//   let input = "";
//   if (block.check === "field") {
//     input = block.inputList[0].fieldRow[0].value_;
//     console.log(block.parentBlock_);
//     if (block.parentBlock_) {
//       console.log(block.parentBlock_);
//     }
//   }
//   console.log(block);
// }
