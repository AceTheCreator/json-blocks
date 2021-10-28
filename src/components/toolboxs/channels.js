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
    connections: ["customObjDropdown"],
  },
];

export const medium = [
  {
    type: "string",
    name: "summary",
    connections: ["customObjDropdown"],
  },
  {
    type: "string",
    name: "operationId",
    connections: ["customObjDropdown"],
  },
  {
    type: "array",
    name: "traits",
    isNested: true,
    connections: ["customObjDropdown"],
  },
  {
    type: "object",
    name: "message",
    connections: ["customObjDropdown"],
  },
];
