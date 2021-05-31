import "./TodoName.css";
import { TimePar } from "../Time/Time";
import { useRef } from "react";

export const TodoName = ({ text, handleText }) => {
  const textRef = useRef(text);
  const handleInput = (e) => {
    handleText(e.target.innerText);
  };

  return (
    <span>
      <div
        contentEditable
        className="todoName"
        suppressContentEditableWarning
        onInput={handleInput}
      >
        {textRef.current}
      </div>
      {TimePar}
    </span>
  );
};
