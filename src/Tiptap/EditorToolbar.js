// src/EditorToolbar.tsx
import React from "react";
import { useEditor } from "@tiptap/react";

const EditorToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        Underline
      </button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default EditorToolbar;
