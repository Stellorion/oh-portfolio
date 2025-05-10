import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/osher-haimi-7b8143357/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Stellorion",
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];

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
            {socials.map(({ name, url, icon }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <span className="sr-only">{name}</span>
                {icon}
              </a>
            ))}
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