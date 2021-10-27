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
  objPayload,
  dropDown,
} from "../components/toolboxs/components";
import { channelName, channel } from "../components/toolboxs/channels";

export default function blocksUpdater(block, workspace) {
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
    if (block.type === "traits") {
      blocks = objPayload;
    }
    if (block.type === "$ref") {
      blocks = dropDown;
    }
  }
  if (active === "Channels") {
    if (block.type === "channels") {
      blocks = channelName;
    }
    if (block.type === "customBlock") {
      blocks = channel;
    }
  }
  blockGenerator(block, blocks, workspace);
}
