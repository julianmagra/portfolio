const Footer = () => {
  return (
    /* corregir alineamiento footer  */
    <footer
      className="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center  "
      id="contact"
    >
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <p className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          Copyright © Julian Magra 2024 All rights Reserved
        </p>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <button className="text-md mr-8 hover:underline me-4 md:me-6">
            Resume
          </button>
          <button className="text-md hover:underline me-4 md:me-6">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
