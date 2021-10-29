import Editor from "@monaco-editor/react";
import { PreviewWrapper } from "./views.style";
// eslint-disable-next-line no-unused-vars
import spec from "../data/spec";

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
function Preview() {
  const data = JSON.stringify(spec);
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
