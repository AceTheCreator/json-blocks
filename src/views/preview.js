/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import OutsideClickHandler from "react-outside-click-handler";
import { ErrorLists, PreviewHeader, PreviewWrapper } from "./views.style";
// eslint-disable-next-line no-unused-vars
import spec from "../data/spec";
import errorPayload from "../data/errorPayloads";

function formatJSON(val) {
  try {
    const res = JSON.parse(val);
    return JSON.stringify(res, null, 2);
  } catch {
    const errorJson = {
      error: `非法返回${val}`,
    };
    return JSON.stringify(errorJson, null, 2);
  }
}
function Preview({ workspace, error }) {
  const [view, setView] = useState("editor");
  const [blockId, setBlockId] = useState(null);
  const data = JSON.stringify(spec);
  useEffect(() => {
    workspace.highlightBlock(blockId);
  }, [blockId]);
  useEffect(() => {
    if (error) {
      setView("error");
    } else {
      setView("editor");
    }
  }, [error]);
  if (view === "error") {
    return (
      <PreviewWrapper
        style={{
          width: "40%",
          background: "#862940",
        }}
      >
        <PreviewHeader>
          Oh snap! <br /> We found the following errors in your spec blocks:
        </PreviewHeader>
        <OutsideClickHandler onOutsideClick={() => setBlockId("jdj")}>
          <ErrorLists>
            {Object.keys(errorPayload).map((payload) => {
              if (errorPayload[payload].checks.length > 0) {
                return (
                  <button
                    key={payload}
                    onClick={() => {
                      const { id } = errorPayload[payload];
                      setBlockId(id);
                    }}
                  >
                    <div>{errorPayload[payload].message}</div>
                  </button>
                );
              }
            })}
          </ErrorLists>
        </OutsideClickHandler>
      </PreviewWrapper>
    );
  }
  return (
    <PreviewWrapper
      style={{
        width: "60%",
      }}
    >
      <Editor
        height="90vh"
        defaultLanguage="json"
        theme="vs-dark"
        value={formatJSON(data)}
        options={{
          readOnly: true,
        }}
      />
    </PreviewWrapper>
  );
}

export default Preview;
