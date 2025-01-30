import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/menuCategory";

/* bg img */
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="">
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      {/* main cover */}
      <div className="w-11/12 mx-auto ">
        <SectionTitle heading="Don't Miss" subHeading="Today's Offer" />
        {/* offered menu */}
        <MenuCategory items={offered} />
        {/* dessert menu item */}
        <MenuCategory items={desserts} title="Dessert" Img={dessertImg} />
        {/* pizza menu item  */}
        <MenuCategory items={pizza} title="Pizza" Img={pizzaImg} />
        {/* soup  */}
        <MenuCategory items={soup} title="Soup" Img={soupImg} />
        {/* salad */}
        <MenuCategory items={salad} title="Salad" Img={saladImg} />
      </div>
    </div>
  );
};

export default Menu;
