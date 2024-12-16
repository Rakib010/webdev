import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Nav = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  const [open, setOpen] = useState(false);

  const handleBtn = () => {
    setOpen(!open);
    /* console.log('click') */
  };

  return (
    <nav className="w-10/12 mx-auto">
      <div onClick={handleBtn}>{open ? <IoMdMenu /> : <IoMdClose />}</div>
      <ul
        className={`md:flex absolute duration-100 md:static px-4 ${
          open ? "top-5" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <li className="mr-6 font-semibold text-xl " key={route.id}>
            <a href={route.path}></a>
            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
