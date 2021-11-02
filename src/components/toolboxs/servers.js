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
    message: "The name of your server. E.g Production.",
    connections: ["servers"],
    checks: ["url", "protocol"],
    isCustom: true,
    standalone: true,
  },
];

export const prod = [
  blockTitle,
  {
    name: "url",
    type: "url",
    message: "A URL to the target host",
    checks: ["text_input"],
    connections: ["customBlock"],
  },
  {
    name: "protocol",
    type: "string",
    checks: ["dropDown"],
    message: "he protocol this URL supports for connection.",
    connections: ["customBlock"],
  },
  {
    name: "description",
    type: "string",
    message: "An optional string describing the host designated by the URL.",
    checks: ["text_input"],
    connections: ["customBlock"],
  },
  {
    type: "custom",
    name: "customBlock",
    message:
      "A map between a variable name and its value. The value is used for substitution in the server's URL template.",
    connections: ["customBlock"],
    isCustom: true,
  },
];

export const protocolValues = [
  {
    type: "dropDown",
    name: "dropDown",
    data: [
      ["mqtt", "mqtt"],
      ["kafka", "kafka"],
      ["amqp", "amqp"],
      ["websocket", "websocket"],
    ],
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
