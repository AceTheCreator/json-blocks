export default function toolBoxUpdater(event, workspace, defaultToolbox) {
  const selectedBlock = workspace.getBlockById(event.blockId);
  if (selectedBlock && selectedBlock.needsChildren) {
    const content = {
      contents: [
        {
          kind: "label",
          text: "Schema",
        },
        {
          kind: "block",
          type: "name",
        },
        {
          kind: "block",
          type: "url",
        },
      ],
    };
    workspace.updateToolbox(content);
  } else {
    workspace.updateToolbox(defaultToolbox);
  }
}
