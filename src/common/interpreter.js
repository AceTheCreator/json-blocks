/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
export function infoSchema(block) {
  if (Object.keys(block).length > 0) {
    for (let i = 0; i < block.length; i++) {
      if (block[i].type === "info_schema") {
        const childBlocks = block[i].childBlocks_;
        if (Object.keys(childBlocks).length > 0) {
          for (let j = 0; j < childBlocks.length; j++) {
            console.log(childBlocks[j]);
          }
        }
      }
    }
  }
}
