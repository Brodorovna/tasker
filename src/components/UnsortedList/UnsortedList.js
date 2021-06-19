import "./UnsortedList.css";
import { Checkbox } from "../Checkbox/Checkbox";
import { TodoName } from "../TodoName/TodoName";
import { DotColor } from "../CategoryDot/CategoryDot";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { useContext, useState } from "react";
import { EditingContext } from "../../providers/EditingProvider";
import { TASK_KEY } from "../../constants";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { DataContext } from "../../providers/DataProvider";

export const UnsortedList = ({
  done,
  text,
  category,
  updateList,
  index,
  deleteTask,
  id,
}) => {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false); // clear
  const { isEditing } = useContext(EditingContext);
  const { categoryList } = useContext(DataContext);
  const currentCategory = categoryList.find(
    (categoryItem) => categoryItem.id === category
  );
  const handleState = (checked) => {
    updateList(index, TASK_KEY.done, checked);
  };
  const handleText = (text) => {
    updateList(index, TASK_KEY.text, text);
  };

  const handleCategory = (value) => {
    updateList(index, TASK_KEY.category, value);
    closeCategoryModal();
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const openCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
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
        {isCategoryModalOpen && (
          <CategoryModal
            activeCategoryId={category}
            onClick={handleCategory}
            closeModal={closeCategoryModal}
          />
        )}
      </div>
    </li>
  );
};
