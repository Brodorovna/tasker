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
import { EditCategoryModal } from "./components/EditCategoryModal/EditCategoryModal";
import { categoryStorage } from "./components/CategoryList/CategoryList";

var randomColor = require("randomcolor");

// const CategoryList = () => {

// };

const DEFAULT_NEW_TASK = {
  [taskKeys.done]: false,
  [taskKeys.text]: "",
  [taskKeys.category]: "",
};

// !!!!!!!!!!!!!!!!!!!
const DEFAULT_NEW_CATEGORY = {
  [categoryKeys.title]: "",
  [categoryKeys.color]: "",
  [categoryKeys.id]: "",
};

const todolist = JSON.parse(localStorage.getItem("todolist")) || [];

function App() {
  const [list, setList] = useState(todolist || []);
  const [categoryList, setCategoryList] = useState(categoryStorage || []); ////!!!!!!!!!!!!!!!!

  const saveChanges = (newList) => {
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const saveCategoriesChanges = (newCategoryList) => {
    setCategoryList(newCategoryList);
    localStorage.setItem("categoryStorage", JSON.stringify(newCategoryList));
  };

  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false); // clear

  const [activeTask, setActiveTask] = useState(); // clear

  // !!!!!!!!!!!!!!!!!!!
  const [activeCategoryId, setActiveCategoryId] = useState(); // so-so

  const renderItem = (item, key) => {
    if (activeCategoryId && item.category !== activeCategoryId) return null; //рендерятся только те элементы, у которых айди категорий соответствует выбранной категории (рботает только в случае, если категория выбрана)
    return (
      <UnsortedList
        key={item.id}
        index={key}
        {...item}
        updateList={updateList}
        deleteTask={deleteTask}
        setCategoryModalOpen={setCategoryModalOpen}
        setActiveTask={setActiveTask}
        categoryList={categoryList}
      />
    );
  };

  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  const updateList = (index, key, value) => {
    list[index][key] = value;
    saveChanges([...list]);
  };

  //!!!!!!!!!!!!!!!!!!!!!!!
  const updateCategoryList = (key, value) => {
    categoryList[key] = value;
    setCategoryList([...categoryList]);
  };

  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...list];
    saveChanges(newList);
  };

  //!!!!!!!!!!!!!!!!!
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

  const deleteCategory = (id) => {
    const newCategoryList = categoryList.filter((item) => item.id !== id);
    setCategoryList(newCategoryList);
    saveCategoriesChanges(newCategoryList);
  };

  const changeCategory = (categoryId) => {
    updateList(activeTask.index, taskKeys.category, categoryId);
    closeCategoryModal();
  };

  const [isEditCategoryModalOpen, setisEditCategoryModalOpen] = useState(false); // clear

  const editCategory = (categoryId) => {
    console.log("Edit", categoryId);
    <EditCategoryModal
      activeCategoryId={categoryId}
      // onClick={onClick}
      closeModal={closeCategoryModal}
    />;
  };

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const renderCategoryItem = (item) => (
    <Category
      id={nanoid}
      {...item}
      key={item.id}
      setActiveCategoryId={setActiveCategoryId}
      isActive={item.id === activeCategoryId}
      deleteCategory={deleteCategory}
      editCategory={editCategory}
    />
  );

  // useEffect(() => {
  //   if (!activeCategoryId) {
  //     setList(todolist);
  //     return;
  //   }
  //   const newList = todolist.filter(
  //     (item) => item.category === activeCategoryId
  //   );
  //   setList(newList);
  // }, [activeCategoryId]);
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
        {isCategoryModalOpen && (
          <CategoryModal
            activeCategoryId={activeTask.category}
            onClick={changeCategory}
            closeModal={closeCategoryModal}
            categoryList={categoryList}
          />
        )}
      </section>
    </EditingProvider>
  );
}

export default App;
