import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { Audio, DNA } from "react-loader-spinner";

const User = () => {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data with axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUser(data.data));
    setLoading(false);
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      {/* loading spinner use from react component */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold my-5 ">Loading Spinner</h1>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
      {/* data load smy just spinner ghurbe */}
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <h2 className="text-2xl font-bold my-10 text-center ">
        User Count: {user.length} (TinyBarChart)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={user}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="phone" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default User;
