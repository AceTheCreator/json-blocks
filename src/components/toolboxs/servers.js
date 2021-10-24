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

export const serverContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "production",
    },
    {
      kind: "block",
      type: "development",
    },
    {
      kind: "label",
      text: "Input Fields",
    },
  ],
};

export const prodContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "url",
    },
    {
      kind: "block",
      type: "protocol",
    },
    {
      kind: "block",
      type: "description",
    },
    {
      kind: "block",
      type: "variables",
    },
  ],
};

export const variables = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "port",
    },
    {
      kind: "block",
      type: "security",
    },
  ],
};

export const port = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "description",
    },
    {
      kind: "block",
      type: "default",
    },
    {
      kind: "block",
      type: "enum",
    },
  ],
};
