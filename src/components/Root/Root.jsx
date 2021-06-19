import "./Root.css";
import { useContext, useState } from "react";
import { EditButton } from "../EditButton/EditButton";
import { TodoList } from "../TodoList/TodoList";
import { CategoryList } from "../CategoryList/CategoryList";
import { DataContext } from "../../providers/DataProvider";
import { New } from "../New/New";

export const Root = () => {
  const [activeCategoryId, setActiveCategoryId] = useState();
  const { categoryList } = useContext(DataContext);

  const activeCategory = categoryList.find(
    (item) => item.id === activeCategoryId
  );

  return (
    <section>
      <header>
        <h1>{activeCategory ? activeCategory.title : "Today"} </h1>
        <nav className="collapsed">
          <EditButton />
        </nav>
      </header>
      <main>
        <ul className="todo">
          <div className="root">
            <TodoList activeCategoryId={activeCategoryId} />
          </div>
        </ul>
        <div className="Categories">
          {/* {categoryList.map(renderCategoryItem)} */}
          <CategoryList
            setActiveCategoryId={setActiveCategoryId}
            activeCategoryId={activeCategoryId}
            // deleteCategory={deleteCategory}
          />
        </div>
      </main>
      <New />
    </section>
  );
};
