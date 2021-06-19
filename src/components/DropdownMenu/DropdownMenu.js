import { ReactComponent as NewTaskIcon } from "./taskIcon.svg";
import { ReactComponent as NewCategoryIcon } from "./categoryIcon.svg";
import "./DropdownMenu.css";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { nanoid } from "nanoid";
import { DEFAULT_NEW_TASK } from "../../constants";

export const DropdownMenu = ({ setOpen }) => {
  const { setTodoList, todoList } = useContext(DataContext);
  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...todoList];
    setTodoList(newList);
    setOpen(false);
  };

  const openAddCategoryModal = () => {
    console.log("Open!");
  };

  // const addCategory = () => {
  //   const id = nanoid();
  //   const newCategoryList = [
  //     { ...getDefaultNewCategory(randomColor), id },
  //     ...categoryList,
  //   ];
  //   setCategoryList(newCategoryList);
  //   setOpen(false);
  // };
  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu-item">
        <button className="dropdown-menu-button" onClick={addTask}>
          <span className="dropdown-menu-button-span taskIcon">
            <NewTaskIcon />
          </span>
          <span className="dropdown-menu-button-label">Task</span>
        </button>
      </div>
      <div className="dropdown-menu-item">
        <button className="dropdown-menu-button" onClick={openAddCategoryModal}>
          <span className="dropdown-menu-button-span">
            <NewCategoryIcon />
          </span>
          <span className="dropdown-menu-button-label">Category</span>
        </button>
      </div>
    </div>
  );
};
