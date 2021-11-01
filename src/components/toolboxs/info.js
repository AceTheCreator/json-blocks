/* eslint-disable import/prefer-default-export */
const blockTitle = {
  kind: "label",
  text: "Required blocks",
};
export const infoToolbox = {
  contents: [
    blockTitle,
    {
      kind: "block",
      type: "info",
    },
  ],
};

export const info = [
  {
    name: "title",
    type: "string",
    message: "The title of the application.",
    connections: ["info"],
  },
  {
    name: "version",
    type: "string",
    message:
      "Provides the version of the application API (not to be confused with the specification version).",
    connections: ["info"],
  },
  {
    name: "description",
    connections: ["info"],
    message: "A short description of the application.",
    type: "string",
  },
  {
    name: "license",
    type: "object",
    message: "The license information for the exposed API.",
    checks: ["name", "url"],
    connections: ["info"],
    standalone: true,
  },
];

export const license = [
  {
    name: "name",
    type: "string",
    checks: ["text_input"],
    connections: ["license"],
  },
  {
    name: "url",
    connections: ["license"],
    type: "url",
  },
];
