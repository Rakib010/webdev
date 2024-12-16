import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryShow from "./CategoryShow";

const CategoryDetails = () => {
  //
  const { id } = useParams();
  /* console.log(id); */

  /* btn handle  */
  const goBack = useNavigate();
  const handleBtn = () => {
    goBack(-1);
  };

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      const result = await res.json();
      setData(result.meals);
    };
    fetchData();
  }, [id]);
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center mt-5 mb-10">
        <h1 className="text-4xl font-bold mb-4">{id} item</h1>
        <button className="btn font-semibold text-lg" onClick={handleBtn}>
          Go Back categories
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <CategoryShow key={index} item={item}></CategoryShow>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
