function Services() {
  return (
    <section className="bg-gray-900 text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            We Provide
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            At Nexa Digital, we blend technical precision with creative strategy
            to build digital experiences that perform. From high-speed web
            development and intuitive UI/UX design to strategic branding and
            SEO, we provide the end-to-end solutions your brand needs to thrive
            in a competitive digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap">
          <div
            className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800 
  hover:-translate-y-1 
  transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Web Development
            </h2>
            <p className="leading-relaxed text-base text-gray-400 mb-4">
              Engineering high-performance, scalable websites tailored for
              seamless functionality.
            </p>
          </div>

          <div
            className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800 
  hover:-translate-y-1 
  transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              UI/UX Design
            </h2>
            <p className="leading-relaxed text-base text-gray-400 mb-4">
              Crafting intuitive, user-centric interfaces that blend aesthetic
              appeal with effortless navigation.
            </p>
          </div>

          <div
            className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800 
  hover:-translate-y-1 
  transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Branding And Identity
            </h2>
            <p className="leading-relaxed text-base text-gray-400 mb-4">
              Building cohesive visual stories that resonate with your audience
              and define your market presence.
            </p>
          </div>

          <div
            className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800 
  hover:-translate-y-1 
  transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              SEO Optimization
            </h2>
            <p className="leading-relaxed text-base text-gray-400 mb-4">
              Maximizing digital visibility through data-driven strategies to
              dominate search rankings.
            </p>
          </div>
        </div>

        <button className="flex mx-auto mt-16 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg transition cursor-pointer">
          View More
        </button>
      </div>
    </section>
  );
}

export default Services;
