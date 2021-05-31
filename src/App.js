import { nanoid } from "nanoid";
import "./App.css";
import { useEffect, useState } from "react";
import { taskKeys, UnsortedList } from "./components/UnsortedList/UnsortedList";
import { AddButton } from "./components/AddButton/AddButton";
import { EditButton } from "./components/EditButton/EditButton";
import { EditingProvider } from "./providers/EditingProvider";
import { CategoryModal } from "./components/CategoryModal/CategoryModal";
import { Category } from "./components/Category/Category";
import { categoryList } from "./data/categoryList";

const DEFAULT_NEW_TASK = {
  [taskKeys.done]: false,
  [taskKeys.text]: "",
  [taskKeys.category]: "",
};
const todolist = JSON.parse(localStorage.getItem("todolist")); // счиьтывание списка из локального хранилища

function App() {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [list, setList] = useState(todolist || []); // list - это массив, который будет обновляться хуком setList, его изначальное значение - либо todolist, либо новый пустой массив
  const [isEditing, setEditing] = useState(false); //менятся isEditing, дефолтное значение - false
  // Стрелочная ф-ция, в качестве аргумента принимает newList. Хук seetlist вносит изменения в состояние list-a, эти данные записываются в хранилище
  const saveChanges = (newList) => {
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const [activeTask, setActiveTask] = useState();
  const [activeCategoryId, setActiveCategoryId] = useState();

  const renderItem = (
    //Создание элемента списка. Стрелочная ф-ция, в качестве аргумента берёт item и key.
    item,
    key
  ) => (
    <UnsortedList //Импортированный компонент и его пропсы
      key={item.id} //id каждого элемента массива выступает в качестве ключа
      index={key} // ??? пропс index = key (потому что через DOM мы не дотянемся до id? ) ??? НО ОН ЖЕ ВСЁ РАВНО НАКИДЫВАЕТСЯ САМ :( )
      {...item} // все остальные элементы массива
      updateList={updateList} // в качестве пропсов вычтупают ф-кции, это норма.
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

  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...list];
    saveChanges(newList);
  };

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
          <div className="Cateegories">
            {categoryList.map(renderCategoryItem)}
          </div>
        </main>
        <AddButton onClick={addTask} />
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
