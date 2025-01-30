import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const reduce = count - 1;
    if (reduce >= 0) {
      setCount(reduce);
    }
  };
  return (
    <div style={{ border: "2px solid yellow" }}>
      <h3>Counter:{count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
