// src/Tiptap.tsx
import React from "react";
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import EditorToolbar from "./EditorToolbar";
import MenuBar from "./MenuBar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  return (
    <>
      <MenuBar />
      {/* <EditorToolbar editor={editor} /> */}
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </>
  );
};

export default Tiptap;
