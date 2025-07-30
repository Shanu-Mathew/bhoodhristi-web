import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-300 via-gray-200 to-gray-00 text-gray-700 text-sm border-t border-gray-300 pt-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="DroneTech Company Logo"
              className="w-50 object-contain"
            />
            <p className="mb-4 leading-relaxed text-gray-600">
              Head Office: KITES Office, IIITDM Kurnool, Jagannathgattu Hills, <br />Kurnool, Andhra Pradesh - 518008
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-700 transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-1 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li><a href="about" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-gray-800">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="https://www.civilaviation.gov.in/ministry-documents/rules" className="hover:underline">Drone Regulations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-gray-800">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">WhatsApp</a></li>
                <li><a href="#" className="hover:underline">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center text-xs text-gray-600 pt-4 pb-2">
          All rights reserved by Bhoodhristi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
