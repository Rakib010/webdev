const ReusableForm = ({
  formTitle,
  submitBtnText = "Submit",
  handleSubmit,
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <h2>{children}</h2>
      <form className="p-10" onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input className="my-2" type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
