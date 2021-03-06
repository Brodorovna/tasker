import "./CategoryModal.css";
import { DotColor } from "../CategoryDot/CategoryDot";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import { CloseButton } from "../CloseModal/CloseModal";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";

const CategoryItem = ({ id, title, color, isActive, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <div className="category-item" onClick={handleClick}>
      <div className="category-item__check">
        <CheckIcon checked={isActive} />
      </div>
      <div className="category-item__title">{title}</div>
      <div className="category-item__dot">
        <DotColor color={color} />
      </div>
    </div>
  );
};

export const CategoryModal = ({ activeCategoryId, onClick, closeModal }) => {
  const { categoryList } = useContext(DataContext);
  const renderCategory = (category) => (
    <CategoryItem
      key={category.id}
      isActive={activeCategoryId === category.id}
      onClick={onClick}
      {...category}
    />
  );
  return (
    <div className="category-modal">
      <div className="category-modal__box">
        <div className="category-modal__head">
          <div className="category-modal__title">Select Category</div>
          <CloseButton onClick={closeModal} />
        </div>
        <div className="category-modal__list">
          {categoryList.map(renderCategory)}
        </div>
      </div>
    </div>
  );
};
