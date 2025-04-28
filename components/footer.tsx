const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-red-500 mb-4">
            <span className="text-white">PORT</span>FOLIO
          </div>
          <p className="text-gray-400 mb-6 text-center">
            Living, learning, & leveling up one day at a time.
          </p>
          <div className="flex space-x-4 mb-8">
            {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map(
              (social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                    />
                  </svg>
                </a>
              )
            )}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Osher Haimi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
