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

export const componentContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "messages",
    },
    {
      kind: "block",
      type: "schemas",
    },
    {
      kind: "block",
      type: "securitySchemes",
    },
    {
      kind: "block",
      type: "parameters",
    },
    {
      kind: "block",
      type: "messageTraits",
    },
    {
      kind: "block",
      type: "operationTraits",
    },
  ],
};

export const custom = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "customBlock",
    },
  ],
};

export const messageContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "name",
    },
    {
      kind: "block",
      type: "title",
    },
    {
      kind: "block",
      type: "summary",
    },
    {
      kind: "block",
      type: "payload",
    },
    {
      kind: "block",
      type: "traits",
    },
  ],
};

export const schemaContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "type",
    },
    {
      kind: "block",
      type: "properties",
    },
  ],
};

export const payloadContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "ref",
    },
  ],
};

export const refContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "messagePayloads",
    },
  ],
};

export const typeContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "typeValues",
    },
  ],
};

export const propertiesContent = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "type",
    },
    {
      kind: "block",
      type: "description",
    },
    {
      kind: "block",
      type: "ref",
    },
    {
      kind: "block",
      type: "enum",
    },
    {
      kind: "block",
      type: "setVal",
    },
    {
      kind: "block",
      type: "format",
    },
  ],
};
