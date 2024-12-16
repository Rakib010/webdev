/* eslint-disable react/prop-types */
const CategoryShow = ({ item }) => {
  return (
    <div>
      <div className="border rounded-lg p-4 ">
        <img
          className="h-52 w-full object-cover rounded-lg"
          src={item.strMealThumb}
          alt=""
        />
        <h1 className="mt-4 mb-2  text-xl font-bold ">{item.strMeal}</h1>
      </div>
    </div>
  );
};

export default CategoryShow;
