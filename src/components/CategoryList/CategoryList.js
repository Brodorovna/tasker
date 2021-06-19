import "./CategoryList.css";
import { Category } from "../Category/Category";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ls } from "../../helpers/ls";
import { DataContext } from "../../providers/DataProvider";

export const categoryStorage = ls.get("categoryStorage");

export const CategoryList = ({ setActiveCategoryId, activeCategoryId }) => {
  const { categoryList } = useContext(DataContext);
  const renderCategoryItem = (item) => (
    <Category
      id={nanoid}
      {...item}
      key={item.id}
      setActiveCategoryId={setActiveCategoryId}
      isActive={item.id === activeCategoryId}
    />
  );

  return <>{categoryList.map(renderCategoryItem)}</>;
};
