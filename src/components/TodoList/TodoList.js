import { useContext } from "react";
import { UnsortedList } from "../../components/UnsortedList/UnsortedList";
import { DataContext } from "../../providers/DataProvider";

export const TodoList = ({ activeCategoryId }) => {
  const { todoList, setTodoList } = useContext(DataContext);

  const deleteTask = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  const updateList = (index, key, value) => {
    todoList[index][key] = value;
    setTodoList([...todoList]);
  };

  const renderItem = (item, key) => {
    if (activeCategoryId && item.category !== activeCategoryId) return null; //рендерятся только те элементы, у которых айди категорий соответствует выбранной категории (рботает только в случае, если)
    return (
      <UnsortedList
        key={item.id}
        index={key}
        {...item}
        updateList={updateList}
        deleteTask={deleteTask}
      />
    );
  };
  return (
    <>
      <div className="tasklist">{todoList.map(renderItem)}</div>
    </>
  );
};
