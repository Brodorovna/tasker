import "./Category.css";

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
}) => {
  const handleClick = () => {
    setActiveCategoryId(!isActive ? id : undefined);
  };
  return (
    <div
      className="category"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <div className="category__title">{title}</div>
    </div>
  );
};
