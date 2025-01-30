import { useContext } from "react";
import { DataContext } from "../contex/DataProvider";

const About = () => {
  const { dataNew, setDataNew } = useContext(DataContext);
  console.log(dataNew);

  return (
    <>
      <div className="border border-red-400 p-10 m-5">
        <h1 className="text-3xl font-bold"> This about page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
          pariatur cum! Deserunt libero minima quasi corrupti, repellat aliquid
          iure nisi.
        </p>

        {dataNew.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default About;
