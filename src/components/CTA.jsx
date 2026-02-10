function CTA() {
  return (
    <section className="text-gray-300 bg-gray-900 body-font border-b border-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Ready to Scale Your Digital Presence?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Don't let your brand get lost in the noise—partner with Nexa Digital
            to turn your vision into a high-performance reality. Whether you’re
            looking to build a cutting-edge website, redefine your visual
            identity, or dominate search rankings, our team is ready to engineer
            the results you’ve been waiting for. Contact us today for a free
            consultation and let's start building something extraordinary
            together.
          </p>
        </div>

        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-800 bg-opacity-80 rounded border border-gray-600 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 bg-opacity-80 rounded border border-gray-600 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
