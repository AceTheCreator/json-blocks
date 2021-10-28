/* eslint-disable import/prefer-default-export */
const blockTitle = {
  kind: "label",
  text: "Required blocks",
};

export const textToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "text_input",
    },
  ],
};

export const numberToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "math_number",
    },
  ],
};

export const floatToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "float",
    },
  ],
};
