/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line prefer-const

const blockTitle = {
  kind: "label",
  text: "Required blocks",
};
export const channelsToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "channels",
    },
  ],
};

export const channelName = [
  {
    type: "custom",
    name: "customBlock",
    connections: ["channels"],
    message: "The dedicated name for a channel",
    checks: ["description", "customObjDropdown"],
    isCustom: true,
    standalone: true,
  },
];

export const channel = [
  {
    type: "string",
    name: "description",
    message: "An optional description of this channel item.",
    connections: ["customBlock"],
    checks: ["text_input"],
  },
  {
    type: "object",
    name: "parameters",
    connections: ["customBlock"],
  },
  {
    type: "custom",
    name: "customObjDropdown",
    isCustom: true,
    message:
      "A definition of the {SUBSCRIBE, PUBLISH} operation, which defines the messages produced by the application and sent to the channel.",
    checks: ["summary", "operationId", "message"],
    data: [
      ["publish", "publish"],
      ["subscribe", "subscribe"],
    ],
    connections: ["customBlock"],
  },
];

export const params = [
  {
    type: "custom",
    name: "customObjDropdown",
    data: [["", ""]],
    isCustom: true,
    connections: ["parameters"],
  },
];

export const ref = [
  {
    type: "ref",
    name: "$ref",
    message: "Allows for an external definition of this channel item.",
    checks: ["dropDown"],
    connections: ["customObjDropdown"],
  },
];

export const medium = [
  {
    type: "string",
    name: "summary",
    checks: ["text_input"],
    connections: ["customObjDropdown"],
  },
  {
    type: "string",
    name: "operationId",
    checks: ["text_input"],
    connections: ["customObjDropdown"],
  },
  {
    type: "array",
    name: "traits",
    isNested: true,
    checks: ["$ref"],
    connections: ["customObjDropdown"],
  },
  {
    type: "object",
    name: "message",
    checks: ["$ref"],
    connections: ["customObjDropdown"],
  },
];
