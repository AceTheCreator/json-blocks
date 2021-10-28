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

export const info = [
  {
    name: "title",
    type: "string",
    connections: ["info"],
  },
  {
    name: "version",
    type: "float",
    connections: ["info"],
  },
  {
    name: "description",
    connections: ["info"],
    type: "string",
  },
  {
    name: "license",
    type: "object",
    connections: ["info"],
    standalone: true,
  },
];

export const license = [
  {
    name: "name",
    type: "string",
    connections: ["license"],
  },
  {
    name: "url",
    connections: ["license"],
    type: "url",
  },
];
