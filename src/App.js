import { EditingProvider } from "./providers/EditingProvider";
import { DataProvider } from "./providers/DataProvider";
import { Root } from "./components/Root/Root";
import { Form } from "./components/Form/Form";

export const App = () => {
  //зачем это переделывать в константу?
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const saveCategoriesChanges = (newCategoryList) => {
  //   setCategoryList(newCategoryList);
  //   ls.set("categoryStorage", newCategoryList);
  // };

  //!!!!!!!!!!!!!!!!!!!!!!!
  // const updateCategoryList = (key, value) => {
  //   categoryList[key] = value;
  //   setCategoryList([...categoryList]);
  // };

  // const deleteCategory = (id) => {
  //   const newCategoryList = categoryList.filter((item) => item.id !== id);
  //   setCategoryList(newCategoryList);
  //   saveCategoriesChanges(newCategoryList);
  // };

  // const editCategory = (categoryId) => {
  //   console.log("Edit", categoryId);
  //   <EditCategoryModal
  //     activeCategoryId={categoryId}
  //     // onClick={onClick}
  //     // closeModal={closeCategoryModal}
  //   />;
  // };

  return (
    <>
      <EditingProvider>
        <DataProvider>
          <Root />
        </DataProvider>
      </EditingProvider>
      <Form />
    </>
  );
};
