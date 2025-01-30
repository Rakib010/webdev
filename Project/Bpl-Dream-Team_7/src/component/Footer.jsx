const Footer = () => {
  return (
    <div>
      <div>
        {/* Newsletter Section */}
        <div className="mt-10 bg-gradient-to-r from-yellow-100 to-blue-100 p-20 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 w-10/12 mx-auto relative top-40 border-2">
          <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-[#131313B3]">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-yellow-500 text-white shadow-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-slate-900 text-white mt-16">
        <div className="flex justify-center pt-40">
          <img
            className=""
            src="https://i.ibb.co.com/s3kY3BR/logo-footer.png"
            alt=""
          />
        </div>
        <div className="w-10/12 mx-auto pt-10 flex justify-between pb-10">
          <div>
            <h6 className="mb-4 text-xl font-semibold">About Us</h6>
            <p className="w-56 text-[#FFFFFF99]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-4 text-xl font-semibold">Quick Links</h6>
            <a className="link link-hover text-[#FFFFFF99]">Home</a>
            <a className="link link-hover text-[#FFFFFF99]">Services</a>
            <a className="link link-hover text-[#FFFFFF99]">About</a>
            <a className="link link-hover text-[#FFFFFF99]">Contact</a>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Subscribe</h6>
            <p className="mt-4 text-[#FFFFFF99]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex mt-4 gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full max-w-xs bg-slate-700 text-white"
              />
              <button className="btn bg-yellow-500 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <p className="text-center py-4 text-[#FFFFFF99]">
          ©2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
