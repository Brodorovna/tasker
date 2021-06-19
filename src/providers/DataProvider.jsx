import React, { useState } from "react";
import { DATA } from "../constants";
import { ls } from "../helpers/ls";
const DEFAULT_VALUE = {
  categories: [],
  setCategories: () => undefined,
  taskList: [],
  setTaskList: () => undefined,
};

export const DataContext = React.createContext(DEFAULT_VALUE); //В данном случае дефолтное значение - это заглушка

const categoryStorage = ls.get(DATA.CATEGORIES);
const initialTaskList = ls.get(DATA.TODOLIST);

export const DataProvider = ({ children }) => {
  const [categoriesStartList, setCategoriesStartList] = useState(
    categoryStorage || []
  );
  const [taskList, setTaskList] = useState(initialTaskList);

  const setTodoList = (newList) => {
    setTaskList(newList);
    ls.set(DATA.TODOLIST, newList);
  };

  const setCategoryList = (newCategoryList) => {
    setCategoriesStartList(newCategoryList);
    ls.set(DATA.CATEGORIES, newCategoryList);
  };

  return (
    <DataContext.Provider
      value={{
        todoList: taskList,
        categoryList: categoriesStartList,
        setTodoList,
        setCategoryList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
