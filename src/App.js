import { nanoid } from "nanoid";
import "./App.css";
import { useEffect, useState } from "react";
import { taskKeys, UnsortedList } from "./components/UnsortedList/UnsortedList";
import { AddButton } from "./components/AddButton/AddButton";
import { AddCategoryButton } from "./components/AddCategoryButton/AddCategoryButton";
import { EditButton } from "./components/EditButton/EditButton";
import { EditingProvider } from "./providers/EditingProvider";
import { CategoryModal } from "./components/CategoryModal/CategoryModal";
import { categoryKeys, Category } from "./components/Category/Category";
import { EditCategory } from "./components/EditCategory/EditCategory";

var randomColor = require("randomcolor");

const DEFAULT_NEW_TASK = {
  [taskKeys.done]: false,
  [taskKeys.text]: "",
  [taskKeys.category]: "",
};

const DEFAULT_NEW_CATEGORY = {
  [categoryKeys.title]: "",
  [categoryKeys.color]: "",
  [categoryKeys.id]: "",
};

const todolist = JSON.parse(localStorage.getItem("todolist"));
const categoryStorage = JSON.parse(localStorage.getItem("categoryStorage")); ///////////////////

function App() {
  const [list, setList] = useState(todolist || []);
  const [categoryList, setCategoryList] = useState(categoryStorage || []); ////!!!!!!!!!!!!!!!!

  const [isEditing, setEditing] = useState(false);

  const saveChanges = (newList) => {
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };

  const saveCategoriesChanges = (newCategoryList) => {
    setCategoryList(newCategoryList);
    localStorage.setItem("categoryStorage", JSON.stringify(newCategoryList));
  };

  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false); // clear

  const [activeTask, setActiveTask] = useState(); // clear

  const [activeCategoryId, setActiveCategoryId] = useState(); // so-so

  const renderItem = (item, key) => (
    <UnsortedList
      key={item.id}
      index={key}
      {...item}
      updateList={updateList}
      deleteTask={deleteTask}
      setCategoryModalOpen={setCategoryModalOpen}
      setActiveTask={setActiveTask}
    />
  );

  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  const updateList = (index, key, value) => {
    list[index][key] = value;
    saveChanges([...list]);
  };

  ////////////////////////////////
  const updateCategoryList = (key, value) => {
    categoryList[key] = value;
    setCategoryList([...categoryList]);
  };

  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...list];
    saveChanges(newList);
  };

  ///////////////////////////
  const addCategory = () => {
    const id = nanoid();
    const color = randomColor();
    const newCategoryList = [
      { ...DEFAULT_NEW_CATEGORY, color, id },
      ...categoryList,
    ];
    saveCategoriesChanges(newCategoryList);
  };

  // addTask();
  // addCategory();

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    saveChanges(newList);
  };

  const changeCategory = (categoryId) => {
    updateList(activeTask.index, taskKeys.category, categoryId);
    closeCategoryModal();
  };

  const renderCategoryItem = (item) => (
    <Category
      id={nanoid}
      {...item}
      key={item.id}
      setActiveCategoryId={setActiveCategoryId}
      isActive={item.id === activeCategoryId}
    />
  );

  useEffect(() => {
    if (!activeCategoryId) {
      setList(todolist);
      return;
    }
    const newList = todolist.filter(
      (item) => item.category === activeCategoryId
    );
    setList(newList);
  }, [activeCategoryId]);
  return (
    <EditingProvider>
      <section>
        <header>
          <h1>Today</h1>
          <nav className="collapsed">
            <EditButton />
          </nav>
        </header>
        <main>
          <ul className="todo">
            <div className="App">{list.map(renderItem)}</div>
          </ul>
          <div className="Categories">
            {categoryList.map(renderCategoryItem)}
          </div>
        </main>
        <AddButton onClick={addTask} />
        <AddCategoryButton onClick={addCategory} />
        <EditCategory onClick={addCategory} />
        {isCategoryModalOpen && (
          <CategoryModal
            activeCategoryId={activeTask.category}
            onClick={changeCategory}
            closeModal={closeCategoryModal}
          />
        )}
      </section>
    </EditingProvider>
  );
}

export default App;
