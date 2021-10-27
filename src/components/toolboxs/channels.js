/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */

import spec from "../../data/spec";
// populate the parameters dropdown list
// eslint-disable-next-line prefer-const
let paramsData = [["", ""]];
if (spec.components) {
  const { parameters } = spec.components;
  if (parameters && Object.keys(parameters).length > 0) {
    const options = [];
    for (const key in parameters) {
      const res = [key, key];
      options.push(res);
    }
    if (options.length > 0) {
      paramsData = options.length;
    }
  }
  console.log(paramsData);
}

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
    data: paramsData,
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
