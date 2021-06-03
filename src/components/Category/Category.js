import "./Category.css";
import { ReactComponent as DelCatButton } from "./delete.svg";
import { ReactComponent as EditCatButton } from "./edit.svg";

export const categoryKeys = {
  title: "title",
  color: "color",
  id: "id",
};

export const Category = ({
  id,
  title,
  color,
  setActiveCategoryId,
  isActive,
  deleteCategory,
  editCategory,
}) => {
  const handleClick = () => {
    setActiveCategoryId(!isActive ? id : undefined);
  };
  const handleDeleteCategory = () => {
    deleteCategory(id);
  };

  const handleEditCategory = () => {
    editCategory(id);
  };

  return (
    <div className="category-wrapper">
      <div>
        <div className="deleteCategory">
          <DelCatButton onClick={handleDeleteCategory} />
        </div>
        <div className="editCategory">
          <EditCatButton onClick={handleEditCategory} />
        </div>
      </div>
      <div
        className="single-category"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <div className="category__title">{title}</div>
      </div>
    </div>
  );
};
