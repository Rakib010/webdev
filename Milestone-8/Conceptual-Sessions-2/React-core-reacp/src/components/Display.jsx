import NewShow from "./NewShow";
import ShowDisplay from "./ShowDisplay";

const Display = ({ children, ...props }) => {
  const { data, arr, isTrue, number, color } = props;
  /* console.log(props); */

  /* if (isTrue) {
    return <p>{number}</p>;
  } else {
    return <p>{color}</p>;
  } */

  return (
    <div>
      {isTrue ? <NewShow></NewShow> : <ShowDisplay></ShowDisplay>}
      {isTrue && <ShowDisplay></ShowDisplay>}

      {/* <h1>{children}</h1> */}
      {/* <ShowDisplay data={props}></ShowDisplay> */}
    </div>
  );
};

export default Display;
