async function SingleFetchMeals(id) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals?.[0] || null;
  } catch (error) {
    console.error("Error fetching meal:", error);
    return null;
  }
}

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const id = params.id;
  const singleMeal = await SingleFetchMeals(id);

  return {
    title: singleMeal?.strMeal || "Meal Not Found",
    description: singleMeal?.strInstructions || "No description available.",
  };
}

// Meal Detail Page
export default async function MealDetailPage({ params }) {
  const meal = await SingleFetchMeals(params.id);

  if (!meal) {
    return <p className="text-red-500">Meal not found</p>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-60 object-cover rounded-md my-4"
      />
      <p className="text-lg">{meal.strInstructions}</p>
    </div>
  );
}
