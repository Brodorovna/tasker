import "./EditCategoryModal.css";
import { CloseButton } from "../CloseModal/CloseModal";

export const EditCategoryModal = ({
  activeCategoryId,
  onClick,
  closeModal,
}) => {
  return (
    <div className="category-modal">
      <div className="category-modal__box">
        <div className="category-modal__head">
          <div className="category-modal__title">Select Category</div>
          <CloseButton onClick={closeModal} />
        </div>
        <div className="category-modal__list">
          <textarea />
          <textarea />
        </div>
      </div>
    </div>
  );
};
