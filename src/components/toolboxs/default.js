/* eslint-disable import/prefer-default-export */
export const defaultToolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Schema",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
      ],
    },
  ],
};
