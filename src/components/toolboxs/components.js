/* eslint-disable import/prefer-default-export */
const blockTitle = {
  kind: "label",
  text: "Required blocks",
};
export const componentToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "components",
    },
  ],
};

export const component = [
  {
    type: "object",
    name: "messages",
    connections: ["components"],
    standalone: true,
  },
  {
    type: "object",
    name: "schemas",
    connections: ["components"],
    standalone: true,
  },
  {
    type: "object",
    name: "securitySchemes",
    connections: ["components"],
    standalone: true,
  },
  {
    type: "object",
    name: "parameters",
    connections: ["components"],
    standalone: true,
  },
  {
    type: "object",
    name: "messageTraits",
    connections: ["components"],
    standalone: true,
  },
  {
    type: "object",
    name: "operationTraits",
    connections: ["components"],
    standalone: true,
  },
];

export const custom = [
  {
    type: "custom",
    name: "customBlock",
    isCustom: true,
  },
];

export const message = [
  {
    type: "string",
    name: "name",
    connections: ["customBlock"],
  },
  {
    type: "string",
    name: "title",
    connections: ["customBlock"],
  },
  {
    type: "string",
    name: "summary",
    connections: ["customBlock"],
  },
  {
    type: "object",
    name: "payload",
    connections: ["customBlock"],
  },
  {
    type: "array",
    name: "traits",
    connections: ["customBlock"],
  },
];

export const schema = [
  {
    type: "string",
    name: "type",
    connections: ["custom"],
  },
  {
    type: "object",
    name: "properties",
    connections: ["custom"],
  },
];

export const payload = [
  {
    type: "string",
    name: "ref",
    connections: ["payload"],
  },
];

export const ref = [
  {
    type: "block",
    name: "messagePayloads",
  },
];

export const type = [
  {
    type: "block",
    name: "typeValues",
  },
];

export const properties = [
  {
    type: "block",
    name: "customBlock",
    connections: ["properties"],
  },
  {
    type: "block",
    name: "type",
  },
  {
    type: "block",
    name: "description",
  },
  {
    type: "block",
    name: "ref",
  },
  {
    type: "block",
    name: "enum",
  },
  {
    type: "block",
    name: "setVal",
  },
  {
    type: "block",
    name: "format",
  },
];
