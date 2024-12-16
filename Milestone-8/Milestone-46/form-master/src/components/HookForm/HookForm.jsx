import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    // array hisabe data asle use customHook
  /*  const [name, handleNameChange] = useInputState("sakib"); */

  // object hisabe data asle use customHook
  const emailState = useInputState("sakib@kib.com");

  const handleSubmit = (e) => {
    console.log(emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form className="p-10" onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} className="my-2" type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
