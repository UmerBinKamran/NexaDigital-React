import "./style.css";
import logo from "../assets/LOGO 2.png";
function Navbar() {
  return (
    <header className="body-font bg-gray-900 border-b border-slate-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-semibold items-center text-gray-100 mb-4 md:mb-0 transition-all duration-300 hover:scale-105 + transition-transform cursor-pointer">
          <img
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-20 h-20 text-gray-900 p-2 rounded-full"
            src={logo}
            alt="Logo"
          />
          <span className="text-gray-100 ml-3 text-xl">NexaDigital</span>
        </a>

        <nav className="md:mr-auto md:ml-6 md:py-1 md:pl-6 md:border-l md:border-slate-300 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all cursor-pointer">
            Services
          </a>
          <a className="mr-5 relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all cursor-pointer">
            Gallery
          </a>
          <a className="mr-5 relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all cursor-pointer">
            About
          </a>
          <a className="mr-5 relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all cursor-pointer">
            Team
          </a>
        </nav>

        <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition cursor-pointer">
          Contact Us
        </button>
      </div>
    </header>
  );
}
export default Navbar;
