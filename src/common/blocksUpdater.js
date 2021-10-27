/* eslint-disable no-underscore-dangle */
import blockGenerator from "./blockGenerator";
import { info, license } from "../components/toolboxs/info";
import { server, prod, variables, port } from "../components/toolboxs/servers";
import {
  component,
  custom,
  message,
  schema,
  payload,
} from "../components/toolboxs/components";

export default function blocksUpdater(block, workspace) {
  console.log(block);
  const active = localStorage.getItem("activeBlock");
  let blocks;
  if (active === "Info") {
    if (block.type === "info") {
      blocks = info;
    }
    if (block.type === "license") {
      blocks = license;
    }
  }
  if (active === "Servers") {
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
  }
  if (active === "Components") {
    if (block.type === "components") {
      blocks = component;
    }
    if (
      block.type === "messages" ||
      block.type === "schemas" ||
      block.type === "securitySchemes" ||
      block.type === "parameters" ||
      block.type === "messageTraits" ||
      block.type === "operationTraits"
    ) {
      blocks = custom;
    }
    if (block.type === "customBlock") {
      if (block.parentBlock_) {
        if (block.parentBlock_.type === "messages") {
          blocks = message;
        }
        if (block.parentBlock_.type === "schemas") {
          blocks = schema;
        }
      }
    }
    if (block.type === "payload") {
      blocks = payload;
    }
  }
  blockGenerator(block, blocks, workspace);
}
