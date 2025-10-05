import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import CustomBtn from "./CustomBtn";

function Drawer({ onClose }: { onClose?: () => void }) {
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  const services = [
    { imgPath: "/images/building.svg", title: "full bathroom cleaning" },
    { imgPath: "/images/house.svg", title: "full home deep cleaning" },
    { imgPath: "/images/building.svg", title: "commercial area cleaning" },
    { imgPath: "/images/kitchen.svg", title: "full kitchen cleaning" },
    { imgPath: "/images/parking.svg", title: "parking area cleaning" },
    { imgPath: "/images/broom.svg", title: "view all cleaning services" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
      />

      {/* Panel */}
      <aside className="fixed top-0 right-0 h-screen bg-white z-50 flex flex-col p-6 w-full max-w-sm shadow-lg transform transition-transform duration-300 ease-out translate-x-0 animate-slideIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <X size={22} />
        </button>

        <div className="flex-1 overflow-y-auto">
          <nav className="space-y-6 mt-8">
            <a
              href="#"
              className="block text-lg font-semibold text-gray-900 hover:text-indigo-600"
            >
              Home
            </a>

            <a
              href="#"
              className="block text-lg font-semibold text-gray-900 hover:text-indigo-600"
            >
              About Us
            </a>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 hover:text-indigo-600"
              >
                <span>Our Services</span>
                {isServicesOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {isServicesOpen && (
                <div className="mt-3 space-y-3 pl-1">
                  {services.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition"
                    >
                      <img src={item.imgPath} className="w-10 h-10" />
                      <span className="capitalize">{item.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="block text-lg font-semibold text-gray-900 hover:text-indigo-600"
            >
              Join Us
            </a>
          </nav>
        </div>

        <div className="mt-8">
          <CustomBtn text="Get a Free Quote" className="w-full py-3" />
        </div>
      </aside>
    </>
  );
}

export default Drawer;
