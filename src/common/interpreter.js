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

function newFormat(block) {
  const hold = block.parentBlock_;
  if (block.standalone) {
    if (hold && hold.parentBlock_) {
      const nextHold = hold.parentBlock_;
      block.parentBlock_ = nextHold;
      nextHold.childBlocks_.push(block);
      const prevChildren = hold.childBlocks_;
      for (let i = 0; i < prevChildren.length; i++) {
        if (prevChildren[i].type === block.type) {
          prevChildren.splice(i, 1);
        }
      }
    }
  } else if (Array.isArray(block.connections)) {
    const { connections } = block;
    for (let i = 0; i < connections.length; i++) {
      if (hold && hold.type !== connections[i]) {
        if (hold.parentBlock_.type === connections[i]) {
          const nextHold = hold.parentBlock_;
          block.parentBlock_ = nextHold;
          nextHold.childBlocks_.push(block);
          const prevChildren = hold.childBlocks_;
          for (let j = 0; j < prevChildren.length; j++) {
            prevChildren.splice(j, 1);
          }
        }
      }
    }
  }
  validateSchema(block);
}

export function blockFormatter(block) {
  block.counter = block.childBlocks_.length - 1;
  newFormat(block);
  generator(block);
  // eslint-disable-next-line no-use-before-define
}

function blockIterator(block, hold) {
  if (block.childBlocks_ && Object.keys(block.childBlocks_)) {
    const blocks = block.childBlocks_;
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].blockType !== "object") {
        if (blocks[i].blockType === "array") {
          if (!hold[blocks[i].type]) {
            hold[blocks[i].type] = [];
          }
          for (let j = 0; j < blocks[i].childBlocks_.length; j++) {
            const blk = blocks[i].childBlocks_;
            hold[blocks[i].type].push(blk[j].inputList[0].fieldRow[0].value_);
          }
        } else if (
          blocks[i].childBlocks_ &&
          Object.keys(blocks[i].childBlocks_).length > 0
        ) {
          if (blocks[i].isCustom) {
            hold[blocks[i].customText] =
              blocks[i].childBlocks_[0].inputList[0].fieldRow[0].value_;
          } else {
            hold[blocks[i].type] =
              blocks[i].childBlocks_[0].inputList[0].fieldRow[0].value_;
          }
        } else if (blocks[i].isCustom) {
          hold[blocks[i].customText] = null;
        } else {
          hold[blocks[i].type] = null;
        }
      } else if (blocks[i].isCustom) {
        hold[blocks[i].customText] = {};
        const newHold = hold[blocks[i].customText];
        blockIterator(blocks[i], newHold);
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
