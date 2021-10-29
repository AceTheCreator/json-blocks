/* eslint-disable import/prefer-default-export */
const blockTitle = {
  kind: "label",
  text: "Required blocks",
};
export const serverToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "servers",
    },
  ],
};

export const server = [
  {
    type: "custom",
    name: "customBlock",
    connections: ["servers"],
    isCustom: true,
    standalone: true,
  },
];

export const prod = [
  blockTitle,
  {
    name: "url",
    type: "url",
    connections: ["customBlock"],
  },
  {
    name: "protocol",
    type: "string",
    connections: ["customBlock"],
  },
  {
    name: "description",
    type: "string",
    connections: ["customBlock"],
  },
  {
    type: "custom",
    name: "customBlock",
    connections: "customBlock",
    isCustom: true,
  },
];

export const variables = [
  {
    name: "port",
    type: "object",
    connections: ["customBlock"],
  },
  {
    type: "array",
    name: "security",
    disabled: "true",
    connections: ["customBlock"],
  },
];

export const port = [
  {
    type: "string",
    name: "description",
    connections: ["port"],
  },
  {
    type: "string",
    name: "default",
    connections: ["port"],
  },
  {
    type: "array",
    name: "enum",
    connections: ["port"],
  },
];
