import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa"; // Importing FaTrash from react-icons
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  // Handle item deletion
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        /*  delete cart item */
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          //console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 flex justify-evenly items-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Items: {cart?.length}
        </h2>
        <h2 className="text-3xl text-gray-600 mt-2">
          Total Price: ${totalPrice?.toFixed(2)}
        </h2>
        {cart?.length ? (
          <Link to="/dashboard/payment">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
              Payment
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="mt-4 px-6 py-2 bg-blue-300 text-white rounded-md cursor-not-allowed"
          >
            Payment
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left text-gray-700">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium">#</th>
              <th className="px-4 py-2 text-sm font-medium">Image</th>
              <th className="px-4 py-2 text-sm font-medium">Name</th>
              <th className="px-4 py-2 text-sm font-medium">Price</th>
              <th className="px-4 py-2 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through cart items */}
            {cart &&
              cart.map((item, index) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-2"
                    >
                      <FaTrash className="h-5 w-5" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
