import { useLoaderData } from "react-router-dom";

const Try = () => {
  const data = useLoaderData();
  /* console.log(data); */

  const { strCategory } = data;

  return (
    <div>
      <h1>Try to understand</h1>
      <h2>{strCategory}</h2>
    </div>
  );
};

export default Try;
