import { Link } from "react-router-dom";
import { HiDownload } from 'react-icons/hi';

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins flex flex-row'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
        <a
          className="px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer borderBlack blueBackground"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
    </footer>
  );
};

export default Footer;