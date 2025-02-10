import "./NewComment.scss";
import { SetStateAction, useState } from "react";
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnBulletList,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

const NewComment = () => {
  const [value, setValue] = useState("Type new comment..");

  function onChange(e: { target: { value: SetStateAction<string> } }) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="NewComment">
        <h3>New Comment</h3>
        <p className="comment">Comment</p>
        <EditorProvider>
          <Editor value={value} onChange={onChange}>
            <Toolbar>
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnBulletList />
            </Toolbar>
          </Editor>
        </EditorProvider>
        <div className="btn-container">
          <button
            onClick={() => {
              const comment = document.querySelector(
                ".NewComment"
              ) as HTMLElement;

              comment.style.display = "none";
            }}
          >
            Cancel
          </button>
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default NewComment;
