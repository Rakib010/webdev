const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculated,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:h-1/3 border p-2 ml-10 mt-10">
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="text-center">Want to Cook: {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => {
              return (
                // Added return here
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id);
                        calculated(recipe.preparing_time, recipe.calories);
                      }}
                      className="btn bg-green-400 rounded-full font-bold"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/*Currently cooking table */}
      <div className="overflow-x-auto mt-20">
        <h2 className="text-center">
          Currently Cooking : {preparedRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => {
              return (
                // Added return here
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              );
            })}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
