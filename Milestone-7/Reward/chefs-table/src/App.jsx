import { useState } from "react";
import Banner from "./compinents/Banner";
import Header from "./compinents/Header";
import Recipes from "./compinents/Recipes";
import RecipesCard from "./compinents/RecipesCard";
import Sidebar from "./compinents/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddRecipeQueue = (recipe) => {
    const isExits = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExits) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already exists in the queue");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    //remove to want to cook
    const updateQueue = recipeQueue.filter((recipe) => recipe.recipe_id !== id);

    setRecipeQueue(updateQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculated = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  return (
    <div className="w-11/12 mx-auto px-4">
      {/* Header section */}
      <Header></Header>
      {/* Banner section */}
      <Banner></Banner>
      {/* Recipes section */}
      <Recipes></Recipes>

      {/* Recipe cards section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Card section */}
        <RecipesCard handleAddRecipeQueue={handleAddRecipeQueue}></RecipesCard>
        {/* Sidebar */}
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculated={calculated}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
