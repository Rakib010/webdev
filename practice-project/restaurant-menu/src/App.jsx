import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  const [cooksBtn, setCookBtn] = useState([]);
  const [cookTime, setCookTime] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTimeCalories = (time, calorie) => {
    setTotalTime(totalTime + Number(time));
    setTotalCalories(totalCalories + Number(calorie));
    console.log(time);
    console.log(calorie);
  };

  // cooksBtn
  const handleBtn = (recipe) => {
    const isExist = cooksBtn.find((p) => p.recipe_id === recipe.recipe_id);
    if (!isExist) {
      const newRecipe = [...cooksBtn, recipe];
      setCookBtn(newRecipe);
    } else {
      alert("Already added");
    }
  };

  // cookTime
  const handleCookTime = (recipe) => {
    const deleteRecipe = cooksBtn.find((p) => p.recipe_id === recipe.recipe_id);

    // remove from went to cook table
    const updateRecipe = cooksBtn.filter(
      (p) => p.recipe_id !== recipe.recipe_id
    );
    setCookBtn(updateRecipe);

    setCookTime([...cookTime, deleteRecipe]);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
        <section className="flex flex-col md:flex-row gap-6">
          {/* Recipes card */}
          <Recipes handleBtn={handleBtn}></Recipes>

          {/* sidebar */}
          <Sidebar
            cooksBtn={cooksBtn}
            handleCookTime={handleCookTime}
            cookTime={cookTime}
            calculateTimeCalories={calculateTimeCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </section>
      </div>
    </div>
  );
};

export default App;
