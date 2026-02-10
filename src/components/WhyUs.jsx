function WhyUs() {
  return (
    <section className="text-gray-800 bg-gray-50 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Why Choose Nexa Digital
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
            We combine data-driven SEO strategies with award-winning design and
            development to turn your digital presence into a measurable growth
            engine. Our team doesn't just build websites; we craft
            high-performance brand identities that captivate users and dominate
            search rankings.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-600 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Fast Delivery
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We prioritize efficiency without compromising quality, utilizing
                agile workflows to launch your project on time and ahead of the
                competition.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Business-Focused Design
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Our creative process is driven by your ROI, ensuring every
                visual element and user journey is engineered to convert
                visitors into loyal customers.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Modern Tech-Stack
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We build with the latest, most reliable technologies to ensure
                your digital platform is secure, scalable, and lightning-fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
