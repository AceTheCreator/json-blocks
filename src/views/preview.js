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
function Preview(workspace) {
  const [view, setView] = useState("editor");
  const [blockId, setBlockId] = useState(null);
  const data = JSON.stringify(spec);
  useEffect(() => {
    if (Object.keys(errorPayload).length > 0) {
      for (const key in errorPayload) {
        if (errorPayload[key].checks.length > 0) {
          setView("error");
          break;
        } else {
          setView("priview");
        }
      }
    }
  }, [errorPayload]);
  useEffect(() => {
    workspace.workspace.highlightBlock(blockId);
  }, [blockId]);
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
            {Object.keys(errorPayload).map((error) => {
              let hold = 0;
              console.log(hold);
              if (errorPayload[error].checks.length > 0) {
                hold += 1;
                return (
                  <button
                    key={error}
                    onClick={() => {
                      const { id } = errorPayload[error];
                      setBlockId(id);
                    }}
                  >
                    <div>{errorPayload[error].message}</div>
                  </button>
                );
              }
              hold -= 1;
            })}
          </ErrorLists>
        </OutsideClickHandler>
      </PreviewWrapper>
    );
  }
  return (
    <PreviewWrapper>
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
