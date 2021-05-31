import "./UnsortedList.css";
import { Checkbox } from "../Checkbox/Checkbox";
import { TodoName } from "../TodoName/TodoName";
import { DotColor } from "../CategoryDot/CategoryDot";
import { categoryList } from "../../data/categoryList";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { useContext } from "react";
import { EditingContext } from "../../providers/EditingProvider";

export const taskKeys = {
  done: "done",
  text: "text",
  category: "category",
};

export const UnsortedList = ({
  done,
  text,
  category,
  updateList,
  index,
  deleteTask,
  id,
  setCategoryModalOpen,
  setActiveTask,
}) => {
  const { isEditing } = useContext(EditingContext);
  const currentCategory = categoryList.find(
    (categoryItem) => categoryItem.id === category
  );
  const handleState = (checked) => {
    updateList(index, "done", checked);
  };
  const handleText = (text) => {
    updateList(index, "text", text);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const openCategoryModal = () => {
    setCategoryModalOpen(true);
    setActiveTask({ category, index });
  };

  return (
    <li>
      {!isEditing ? (
        <Checkbox done={done} handleState={handleState} />
      ) : (
        <DeleteButton onClick={handleDelete} />
      )}
      <TodoName text={text} handleText={handleText}></TodoName>
      <div onClick={openCategoryModal}>
        {<DotColor color={currentCategory && currentCategory.color} />}
      </div>
    </li>
  );
};
