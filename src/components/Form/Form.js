import { nanoid } from "nanoid";
import randomColor from "randomcolor";
import { useContext, useRef } from "react";
import { DataContext } from "../../providers/DataProvider";
import { CATEGORY_KEY } from "../../constants";
import "./Form.css";

export const Form = () => {
  const { categoryList: categoriesStartList, setCategoryList } =
    useContext(DataContext);
  const inputRef = useRef(null);

  const addCategory = () => {
    const id = nanoid();
    const color = randomColor();
    const newCategoryData = {
      id,
      [CATEGORY_KEY.title]: inputRef.current.value,
      [CATEGORY_KEY.color]: color,
    };

    const newList = [newCategoryData];
    setCategoryList(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input ref={inputRef} defaultValue={""} />
      </p>
      <button className="EditCategory">+</button>
    </form>
  );
};
