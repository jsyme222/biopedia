import { Editor, EditorState, convertFromHTML, ContentState } from "draft-js";
import { useState } from "react";

import "draft-js/dist/Draft.css";

function EntryEditor(content: any) {
  const c = convertFromHTML(content.content);
  const state = ContentState.createFromBlockArray(c.contentBlocks, c.entityMap);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(state)
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default EntryEditor;
