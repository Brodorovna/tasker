import { CheckIcon } from "../CheckIcon/CheckIcon";
import "./Checkbox.css";

export const Checkbox = ({ done, handleState }) => {
  const handleClick = () => {
    handleState(!done);
  };

  return (
    <span
      className={!done ? "checkbox" : "checkbox--checked"}
      onClick={handleClick}
    >
      <input type="checkbox" className="checkbox__input" />
      <CheckIcon checked={done} />
    </span>
  );
};
