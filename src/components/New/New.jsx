import "./New.css";
import { AddButton } from "../AddButton/AddButton";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { useState } from "react";

export const New = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={!isOpen ? "new" : "new--open"}>
      <div className="new-action">
        <AddButton onClick={handleOpen} isActive={isOpen} />
        <div className={!isOpen ? "new-menu" : "new-menu--open"}>
          <DropdownMenu setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};
