import { useEffect, useState } from "react";

const Recipes = ({ handleBtn }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
     {/*  <h1>Recipes card: {recipes.length}</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <div className="card border">
                <figure className="px-4 pt-4">
                  <img
                    className="w-full h-52 rounded-xl object-cover"
                    src={recipe.recipe_image}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{recipe.recipe_name}</h2>
                  <p>{recipe.short_description}</p>
                  <hr />
                  <p>Ingredients: {recipe.ingredients.length}</p>
                  <ul>
                    {recipe.ingredients.map((item, indx) => (
                      <li key={indx}>{item}</li>
                    ))}
                  </ul>
                  <hr />
                  <div className="flex gap-8 mb-4">
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-clock"></i>
                      <p>{recipe.preparing_time} Min</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-fire-flame-curved"></i>
                      <p>{recipe.calories} Calories</p>
                    </div>
                  </div>
                  <button onClick={() => handleBtn(recipe)} className="btn bg-green-500 text-white">
                    Want to cook
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
