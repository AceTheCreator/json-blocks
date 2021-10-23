/* eslint-disable no-use-before-define */
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

function objectCreator(currentBlock, block) {
  if (currentBlock && currentBlock.blockType === "object") {
    const { counter } = block;
    if (
      currentBlock.childBlocks_ &&
      Object.keys(currentBlock.childBlocks_).length > 0
    ) {
      const blocks = currentBlock.childBlocks_;
      const currentBloc = blocks[counter];
      objectCreator(currentBloc, currentBlock);
    }
  } else {
    if (
      currentBlock &&
      currentBlock.childBlocks_ &&
      Object.keys(currentBlock.childBlocks_).length > 0
    ) {
      const currentChild = currentBlock.childBlocks_;
      for (let i = 0; i < currentChild.length; i++) {
        if (currentChild[i].blockType !== "field") {
          const holder = currentChild[i];
          currentChild[i].parentBlock_ = block;
          currentChild.splice(i, 1);
          block.childBlocks_.push(holder);
        }
      }
    }
    validateSchema(block);
  }
}

export function blockFormatter(block) {
  const { counter } = block;
  block.counter = block.childBlocks_.length - 1;
  if (block.blockType === "object") {
    if (block.childBlocks_ && Object.keys(block.childBlocks_).length > 0) {
      const blocks = block.childBlocks_;
      const currentBlock = blocks[counter];
      objectCreator(currentBlock, block);
    }
  }
  generator(block);
  // eslint-disable-next-line no-use-before-define
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
        blockIterator(blocks[i], newHold);
      }
    }
  }
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
    console.log(spec);
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
