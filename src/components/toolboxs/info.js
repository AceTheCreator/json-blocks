/* eslint-disable import/prefer-default-export */
export const infoToolbox = {
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
      ],
    },
    {
      kind: "category",
      name: "Blocks",
      colour: "#5CA65C",
      contents: [
        {
          kind: "block",
          type: "math_round",
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
      name: "Custom",
      colour: "#5CA699",
      contents: [
        {
          kind: "block",
          type: "new_boundary_function",
        },
        {
          kind: "block",
          type: "return",
        },
      ],
    },
  ],
};
