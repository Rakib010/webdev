
import {
  multiply,
  add,
  divideTheFirstNumberByTheSecondNumber as divide,
} from "../Utils/calculate";
const Sunglass = () => {
  const a = 10;
  const b = 20;
  const sum = add(a, b);
  const mult = multiply(a, b);
  const vaag = divide(a, b);

  return <div></div>;
};

export default Sunglass;
