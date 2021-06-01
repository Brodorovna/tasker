import "./CategoryModal.css";
// import { categoryList } from "../../data/categoryList";
import { DotColor } from "../CategoryDot/CategoryDot";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import { CloseButton } from "../CloseModal/CloseModal";

const categoryList = JSON.parse(localStorage.getItem("categoryStorage")); ///////////////////

const CategoryItem = ({ id, title, color, isActive, onClick }) => {
  const handleClick = () => {
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
