import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "./../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="menu space-y-4">
          {/* Conditional Admin or User Links */}
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaHome />
                  <span>Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaUtensils />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaList />
                  <span>Manage Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaBook />
                  <span>Manage Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaUsers />
                  <span>All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaHome />
                  <span>User Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaCalendar />
                  <span>Reservation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaShoppingCart />
                  <span>My Cart</span>
                  {/* Assuming cart.length is available */}
                  <span>({cart?.length})</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaAd />
                  <span>Add a Review</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
                >
                  <FaList />
                  <span>My Bookings</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Links */}
          <div className="divider my-4"></div>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
            >
              <FaSearch />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/contact"
              className="flex items-center space-x-2 hover:bg-orange-500 p-2 rounded-md"
            >
              <FaEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
