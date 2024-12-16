import { useEffect, useRef } from "react";

const RefFrom = () => {
  const nameRaf = useRef(null);
  const emailRaf = useRef(null);
  const passRaf = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRaf.current.value);
    console.log(emailRaf.current.value);
    console.log(passRaf.current.value);
  };

  // causer jeno show kore
  useEffect(() => {
    nameRaf.current.focus();
  },[]);

  return (
    <div>
      <form className="p-10" onSubmit={handleSubmit}>
        <input ref={nameRaf} type="text" name="name" />
        <br />
        <input ref={emailRaf} /* defaultValue={'kib@sjdaj.com'} */ className="my-2" type="email" name="email" />
        <br />
        <input ref={passRaf} type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefFrom;
