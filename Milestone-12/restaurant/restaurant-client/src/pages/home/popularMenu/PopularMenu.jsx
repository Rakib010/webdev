import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-8 w-11/12 mx-auto">
      {/* Section title */}
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      {/* Display limited popular menu items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {popular.length > 0 ? (
          popular.map((item) => <MenuItem key={item._id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">No popular items found.</p>
        )}
      </div>
      <button className="btn my-4">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;
