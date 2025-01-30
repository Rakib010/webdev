const Navbar = ({ selectProducts, price }) => {
  return (
    <div className="bg-pink-100 mb-10">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <div className="">
          <a className="btn btn-ghost text-xl font-bold">YoYo</a>
        </div>
        <div className="lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <p>cart:{selectProducts.length} </p>
          <p>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
