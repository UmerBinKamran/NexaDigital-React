import "./style.css";
import heroImage from "../assets/LOGO 2.png";

function Hero() {
  return (
    <section className="text-gray-600 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Engineering the Next Era of
            <br className="hidden lg:inline-block" />
            Digital Growth
          </h1>

          <p className="mb-8 leading-relaxed text-gray-300">
            At Nexa Digital, we bridge the gap between bold ideas and technical
            excellence. From high-performance web development to data-driven
            marketing, we build the digital infrastructure your brand needs to
            lead.
          </p>

          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-600 text-white border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded text-lg cursor-pointer">
              Start Your Evolution
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg cursor-pointer">
              View Our Work
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-lg transition-all duration-300 hover:scale-105 + transition-transform"
            alt="hero"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
