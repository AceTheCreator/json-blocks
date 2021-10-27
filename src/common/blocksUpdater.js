import blockGenerator from "./blockGenerator";
import { info, license } from "../components/toolboxs/info";
import { server, prod, variables, port } from "../components/toolboxs/servers";

export default function blocksUpdater(block, workspace) {
  let blocks;
  if (block.type === "info") {
    blocks = info;
  }
  if (block.type === "license") {
    blocks = license;
  }
  if (block.type === "servers") {
    blocks = server;
  }
  if (block.type === "production" || block.type === "development") {
    blocks = prod;
  }
  if (block.type === "variables") {
    blocks = variables;
  }
  if (block.type === "port") {
    blocks = port;
  }
  blockGenerator(block, blocks, workspace);
}
