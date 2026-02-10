import dropline from "../assets/Dropline.png";
import karachiAir from "../assets/Karachi Air.png";
import WeatherApp from "../assets/Weather App.png";
import attendanceApp from "../assets/Attendance App.png";
import productsShow from "../assets/Products Show Case.png";
import githubProfileFinder from "../assets/Github Profile Finder.png";

function Portfolio() {
  return (
    <section className="text-gray-900 bg-gray-50 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            The Nexa Gallery: Defining the New Standard.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700 text-base">
            Innovation isn’t a goal—it’s our baseline. Discover how we’ve
            leveraged cutting-edge tech and bold design to solve complex
            problems and build the next generation of digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={dropline}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  DROPLINE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  E-Commerce Store
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  A seamless, high-conversion shopping experience featuring
                  dynamic product filtering and a secure, streamlined checkout
                  flow.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={karachiAir}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  KARACHI AIRLINE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Landing-Page
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  A visually stunning, conversion-optimized gateway designed to
                  simplify flight bookings with an intuitive user interface.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={WeatherApp}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  WEATHER APP
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Application
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  A real-time weather tracking tool providing hyper-local
                  forecasts and atmospheric data through clean, reactive data
                  visualization.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={attendanceApp}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  ATTENDANCE CHECKING
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Web-Application
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  A smart management solution for tracking real-time presence
                  and generating automated reports with a focus on
                  administrative efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={productsShow}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  PRODUCT SHOWCASE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Landing-Page
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  An immersive, high-impact landing page crafted to highlight
                  unique product features through engaging visual storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-64 object-cover object-center"
                src={githubProfileFinder}
              />
              <div className="px-6 py-6 absolute inset-0 bg-white bg-opacity-90 opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  GITHUB PROFILE FINDER
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  API Fetching
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  A developer-centric search tool that leverages the GitHub API
                  to fetch and display real-time repository data and user
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
