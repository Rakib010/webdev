import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  // array hisabe data passa korle 
  /* const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
 */

  // object hiasbe data pass korle 
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};

export default useInputState;
