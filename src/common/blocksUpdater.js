/* eslint-disable no-underscore-dangle */
import blockGenerator from "./blockGenerator";
import { info, license } from "../components/toolboxs/info";
import {
  server,
  prod,
  variables,
  port,
  protocolValues,
} from "../components/toolboxs/servers";
import {
  component,
  custom,
  message,
  schema,
  payload,
  objPayload,
  dropDown,
  parameters,
  typeValues,
  operationTraits,
  paramSchema,
  operationProtocol,
  properties,
  propertiesDetails,
  protocolDetails,
} from "../components/toolboxs/components";
import {
  channelName,
  channel,
  params,
  medium,
} from "../components/toolboxs/channels";

export default function blocksUpdater(block, workspace) {
  const active = localStorage.getItem("activeBlock");
  let blocks;
  if (block.type === "traits") {
    blocks = objPayload;
  }
  if (block.type === "$ref") {
    blocks = dropDown;
  }
  if (block.type === "payload" || block.type === "message") {
    blocks = payload;
  }
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
    if (block.type === "customBlock") {
      if (block.parentBlock_) {
        if (block.parentBlock_.type === "servers") {
          blocks = prod;
        } else {
          blocks = variables;
        }
      }
    }
    if (block.type === "protocol") {
      blocks = protocolValues;
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
      block.type === "messageTraits"
    ) {
      blocks = custom;
    }
    if (block.type === "customBlock" || block.type === "customObjDropdown") {
      if (block.parentBlock_) {
        if (block.parentBlock_.type === "messages") {
          blocks = message;
        }
        if (block.parentBlock_.type === "schemas") {
          blocks = schema;
        }
        if (block.parentBlock_.type === "parameters") {
          blocks = parameters;
        }
        if (block.parentBlock_.type === "operationTraits") {
          blocks = operationProtocol;
        }
        if (block.parentBlock_.type === "bindings") {
          blocks = protocolDetails;
        }
        if (block.parentBlock_.type === "properties") {
          blocks = propertiesDetails;
        }
      }
    }
    if (block.type === "properties") {
      blocks = properties;
    }
    if (block.type === "operationTraits" || block.type === "bindings") {
      blocks = operationTraits;
    }
    if (block.type === "schema") {
      blocks = paramSchema;
    }
    if (block.type === "type") {
      blocks = typeValues;
    }
  }
  if (active === "Channels") {
    if (block.type === "channels") {
      blocks = channelName;
    }
    if (block.type === "customBlock") {
      blocks = channel;
    }
    if (block.type === "parameters") {
      blocks = params;
    }
    if (block.type === "customObjDropdown") {
      if (block.parentBlock_ && block.parentBlock_.type === "customBlock") {
        blocks = medium;
      } else {
        blocks = payload;
      }
    }
  }
  blockGenerator(block, blocks, workspace);
}
