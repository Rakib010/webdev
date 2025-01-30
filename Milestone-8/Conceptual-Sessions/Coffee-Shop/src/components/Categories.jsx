import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category, index) => (
        <NavLink
          to={`/category/${category.category}`}
          key={index}
          role="tab"
          className={({ isActive }) => `tab ${isActive ? "tab-active" : ""}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
