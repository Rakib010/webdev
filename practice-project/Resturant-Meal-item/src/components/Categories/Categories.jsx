import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const categories = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 mt-4">
        Food Categories: {categories.length}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((item) => (
          <Category key={item.idCategory} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
