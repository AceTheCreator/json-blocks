/* eslint-disable import/prefer-default-export */
export const infoToolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Schemas",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "info",
        },
        {
          kind: "block",
          type: "title",
        },
        {
          kind: "block",
          type: "version",
        },
        {
          kind: "block",
          type: "description",
        },
        {
          kind: "block",
          type: "license",
        },
      ],
    },
    {
      kind: "category",
      name: "Fields",
      colour: "#5CA65C",
      contents: [
        {
          kind: "block",
          type: "text_input",
        },
        {
          kind: "block",
          type: "math_number",
        },
      ],
    },
    {
      kind: "category",
      cssConfig: {
        container: "yourClassName",
      },
      name: "Optionals",
      colour: "#5CA699",
      contents: [
        {
          kind: "block",
          type: "name",
        },
        {
          kind: "block",
          type: "url",
        },
        {
          kind: "block",
          type: "string_length",
        },
      ],
    },
  ],
};
