import {
  Phone,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Building2,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#181827] text-gray-300 pt-12 pb-6 px-6 md:px-16 font-semibold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo.svg" alt="logo" className="w-16" />
          </div>
          <p className="leading-relaxed mb-4">
            At <span className="font-semibold">Wizard Cleaning Services</span>,
            we provide all kinds of cleaning services to help people maintain a
            spotless space.
          </p>
          <p className="text-sm text-gray-300 md:mt-16">Images by Freepik.</p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Join Us Today
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Services</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-white">
                Bathroom Cleaning Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kitchen Cleaning Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                House Cleaning Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Parking Cleaning Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Commercial Area Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-lg">Our Address</h3>
          <div className="space-y-3 ">
            <p className="flex items-start gap-3">
              <Building2 className="w-8 h-8 text-white mt-1" />8 dipan
              apartment, Bhaikaka Nagar, Thaltej, Ahmedabad.
            </p>
            <p className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white mt-1" /> +91 97252 20107 <br /> +91 82398 07332
            </p>
            
          </div>

          <h4 className="font-semibold text-white mt-6 mb-4 text-xl">
            Stay Connected With Us
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center  text-gray-400">
        <p>© 2025 Wizard Cleaning Services | All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">
          Developed by{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Jay Rai Web
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
