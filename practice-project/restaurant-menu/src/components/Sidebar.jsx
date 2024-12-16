/* eslint-disable react/prop-types */
const Sidebar = ({
  cooksBtn,
  handleCookTime,
  cookTime,
  calculateTimeCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600  text-sm">
      {/*Went to Cook table  */}
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center p-4">
          Went To Cook : {cooksBtn.length}
        </h1>
        <hr />
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
            {cooksBtn.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleCookTime(recipe);
                      calculateTimeCalories(
                        recipe.preparing_time,
                        recipe.calories
                       );
                    }}
                    className="btn bg-green-500 text-white"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*Currently Cooking Table  */}
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center p-4">
          Currently cooking : {cookTime.length}
        </h1>
        <hr />
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
            {cookTime.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <th></th>
              <th>Total Time: {totalTime}</th>
              <th>Total Calories: {totalCalories}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
