/* eslint-disable import/prefer-default-export */
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
    isCustom: true,
    standalone: true,
  },
];

export const channel = [
  {
    type: "string",
    name: "description",
    connections: ["customBlock"],
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
    data: [
      ["publish", "publish"],
      ["subscribe", "subscribe"],
    ],
    connections: ["customBlock"],
  },
];

export const medium = [
  {
    type: "string",
    name: "summary",
    connections: ["publish", "subscribe"],
  },
  {
    type: "string",
    name: "operationId",
    connections: ["publish", "subscribe"],
  },
  {
    type: "array",
    name: "traits",
    isNested: true,
    connections: ["publish", "subscribe"],
  },
  {
    type: "object",
    name: "message",
    connections: ["publish", "subscribe"],
  },
];
