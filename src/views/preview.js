import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/dracula.css";
import { javascript } from "@codemirror/lang-javascript";
import { PreviewWrapper } from "./views.style";
// eslint-disable-next-line no-unused-vars
import spec from "../data/spec";

function Preview() {
  return (
    <PreviewWrapper>
      <CodeMirror
        value={JSON.stringify(spec)}
        height="90vh"
        extensions={[javascript({ json: true })]}
        editable={false}
        options={{
          theme: "dracula",
          keyMap: "sublime",
        }}
      />
    </PreviewWrapper>
  );
}

export default Preview;
