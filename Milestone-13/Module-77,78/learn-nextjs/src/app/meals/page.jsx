import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

// meta data
export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API ",
};

// font
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

async function fetchMeals(search) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default async function MealPage({ searchParams }) {
  const searchQuery = searchParams?.search || "";
  const meals = await fetchMeals(searchQuery);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Search</h1>
      <MealSearchInput />
      <div className="grid grid-cols-3 gap-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="border p-4 rounded-lg shadow-md ">
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="object-cover rounded-md"
                width={641}
                height={641}
              />
              <h2 className="text-lg font-semibold mt-2">{meal.strMeal}</h2>
              <Link href={`/meals/${meal.idMeal}`}>Detail</Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No meals found.</p>
        )}
      </div>
    </div>
  );
}
