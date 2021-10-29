// import { updateActiveBar } from "../utils";

export default function topBlockUpdater(block, setActive) {
  if (block.type === "info") {
    setActive("Info");
  }
  if (block.type === "servers") {
    setActive("Servers");
  }
  if (block.type === "components") {
    setActive("Components");
  }
  if (block.type === "channels") {
    setActive("Channels");
  }
}
