/* eslint-disable import/prefer-default-export */
const blockTitle = {
  kind: "label",
  text: "Required blocks",
};
export const infoToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "info",
    },
  ],
};

export const infoContent = {
  contents: [
    {
      kind: "label",
      text: "Schema",
    },
    {
      kind: "block",
      type: "title",
    },
    {
      kind: "block",
      type: "version",
    },
    {
      kind: "block",
      type: "description",
    },
    {
      kind: "block",
      type: "license",
    },
  ],
};

export const lisenceContent = {
  contents: [
    {
      kind: "label",
      text: "Schema",
    },
    {
      kind: "block",
      type: "name",
    },
    {
      kind: "block",
      type: "url",
    },
  ],
};
