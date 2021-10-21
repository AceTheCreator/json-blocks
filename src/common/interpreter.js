/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import spec from "../data/spec";

export function validateSchema(block) {
  if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
    const blocks = block.childBlocks_;
    if (Array.isArray(block.check)) {
      const checks = block.check;
      for (let i = 0; i < checks.length; i++) {
        for (let j = 0; i < blocks.length; i++) {
          if (blocks[j].type !== checks[j]) {
            blocks[j].style.colourPrimary = "red";
            blocks[j].style.colourSecondary = "red";
          }
        }
      }
    }
  }
}

function objectCreator(currentChildBlock, block, child) {
  if (child) {
    const { counter } = block;
    if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
      const blocks = block.childBlocks_;
      const currentBlock = blocks[counter];
      const a = currentBlock.childBlocks_;
      if (currentBlock.blockType !== "object") {
        objectCreator(a, block);
      } else {
        objectCreator(currentChildBlock, currentBlock, true);
      }
    }
  } else {
    if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
      for (let i = 0; i < currentChildBlock.length; i++) {
        if (currentChildBlock[i].blockType !== "field") {
          const holder = currentChildBlock[i];
          holder.parentBlock_ = block;
          currentChildBlock.splice(i, 1);
          block.childBlocks_.push(holder);
          block.counter += 1;
        }
      }
    }
    validateSchema(block);
  }
}

export function blockFormatter(block) {
  const { counter } = block;
  if (block.blockType === "object") {
    if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
      const blocks = block.childBlocks_;
      const currentBlock = blocks[counter];
      const currentChildBlock = currentBlock.childBlocks_;
      if (currentBlock.blockType !== "object") {
        objectCreator(currentChildBlock, block);
      } else {
        objectCreator(currentChildBlock, currentBlock, true);
      }
    }
  }
  // eslint-disable-next-line no-use-before-define
  generator(block);
}

function blockIterator(block, hold) {
  if (block.childBlocks_ && Object.keys(block.childBlocks_)) {
    const blocks = block.childBlocks_;
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].blockType !== "object") {
        if (
          blocks[i].childBlocks_ &&
          Object.keys(blocks[i].childBlocks_).length > 0
        ) {
          hold[blocks[i].type] =
            blocks[i].childBlocks_[0].inputList[0].fieldRow[0].value_;
        } else {
          hold[blocks[i].type] = null;
        }
      } else {
        hold[blocks[i].type] = {};
        const newHold = hold[blocks[i].type];
        // console.log(newHold);
        // console.log(blocks[i].parentBlock_);
        blockIterator(blocks[i], newHold);
      }
    }
  }
  console.log(spec);
}

function generator(block) {
  if (
    block.type === "info" ||
    block.type === "servers" ||
    block.type === "channels" ||
    block.type === "components"
  ) {
    spec[block.type] = {};
    const hold = spec[block.type];
    blockIterator(block, hold);
  }
}

// function childSchema(blocks, block) {
//   for (let i = 0; i < blocks.length; i++) {
//     if (blocks[i].check === "field") {
//       const value = {};
//       value[block.type] = blocks[i].inputList[0].fieldRow[0].value_;
//       return value;
//     }
//   }
// }

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
