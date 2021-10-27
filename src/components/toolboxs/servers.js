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
    name: "production",
    type: "object",
    standalone: true,
    connections: ["servers"],
  },
  {
    name: "development",
    type: "object",
    standalone: true,
    connections: ["servers"],
  },
];

export const prod = [
  blockTitle,
  {
    name: "url",
    type: "url",
    connections: ["production", "development"],
  },
  {
    name: "protocol",
    type: "string",
    connections: ["production", "development"],
  },
  {
    name: "description",
    type: "string",
    connections: ["production", "development"],
  },
  {
    name: "variables",
    type: "object",
    connections: ["production", "development"],
  },
];

export const variables = [
  {
    name: "port",
    type: "object",
    connections: ["variables"],
  },
  {
    type: "array",
    name: "security",
    disabled: "true",
    connections: ["variables"],
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
