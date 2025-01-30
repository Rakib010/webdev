import { useEffect, useState } from "react";

const RecipesCard = ({ handleAddRecipeQueue }) => {
  const [recipesCard, setRecipeCard] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipeCard(data));
  }, []);

  return (
    <div className="md:w-2/3 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {recipesCard.map((recipe) => {
          return (
            <div
              key={recipe.recipe_id}
              className="card bg-base-100 w-96 border p-4"
            >
              <figure>
                <img src={recipe.recipe_image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p>{recipe.short_description}</p>
                <hr />
                <h1 className="text-xl">
                  ingredients:{recipe.ingredients.length}
                </h1>
                <ul>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <hr />
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    <p>{recipe.preparing_time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-fire-flame-curved"></i>
                    <p>{recipe.calories}</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleAddRecipeQueue(recipe)}
                    className="btn bg-green-400 rounded-full font-bold"
                  >
                    Want to Cook
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

export default RecipesCard;
