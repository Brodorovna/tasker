export const DATA = {
  TODOLIST: "todolist",
  CATEGORIES: "categoryStorage",
};

export const TASK_KEY = {
  done: "done",
  text: "text",
  category: "category",
};

export const DEFAULT_NEW_TASK = {
  [TASK_KEY.done]: false,
  [TASK_KEY.text]: "",
  [TASK_KEY.category]: "",
};

export const CATEGORY_KEY = {
  title: "title",
  color: "color",
  id: "id",
};

// export const getDefaultNewCategory = (color) => ({
//   [CATEGORY_KEY.title]: "",
//   [CATEGORY_KEY.color]: randomColor(),
//   [CATEGORY_KEY.id]: "",
// });
