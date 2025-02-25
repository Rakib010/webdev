// 495caf669789b740e12a2d625aebf7837d97e21ababddcccc832726a45c545907467ceb33bb47e9eebdafab40823280e

const handleSubmit = (e) => {
  e.preventDefault();
  const prompt = e.target.prompt.value;

  //form
  const form = new FormData();
  form.append("prompt", prompt);

  //fetch
  fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": import.meta.env.VITE_CD_KEY,
    },
    body: form,
  })
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      // buffer here is a binary representation of the returned image
      //console.log(buffer)
      const blob = new Blob([buffer], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      console.log(url);
    });
};

const Generate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Generate an Image</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <fieldset className="w-full">
          <div className="flex">
            <input
              type="text"
              name="prompt"
              placeholder="username@site.com"
              className="input input-bordered flex-grow rounded-l-md px-4 py-2"
            />
            <button className="btn btn-primary rounded-r-md px-5">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Generate;
