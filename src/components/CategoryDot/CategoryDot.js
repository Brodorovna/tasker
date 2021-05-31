import "./CategoryDot.css";

export const DotColor = ({ color }) => {
  return (
    <span
      className={`dot ${!color && "no-category"}`}
      style={{ backgroundColor: color }}
    />
  );
};
