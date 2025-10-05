import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Navigation() {
  const [dropdown, setDropdown] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { imgPath: "/images/building.svg", title: "full bathroom cleaning" },
    { imgPath: "/images/house.svg", title: "full home deep cleaning" },
    { imgPath: "/images/building.svg", title: "commercial area cleaning" },
    { imgPath: "/images/kitchen.svg", title: "full kitchen cleaning" },
    { imgPath: "/images/parking.svg", title: "parking area cleaning" },
    { imgPath: "/images/broom.svg", title: "view all cleaning services" },
  ];

  return (
    <nav className="flex items-center gap-8">
      <ul className="flex items-center gap-8">
        <li className="cursor-pointer" onClick={() => setDropdown(false)}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => setDropdown(false)}>
          About Us
        </li>

        {/* Wrapper with ref includes both button + dropdown */}
        <li className="relative" ref={wrapperRef}>
          <button
            onClick={() => setDropdown((prev) => !prev)}
            type="button"
            className="cursor-pointer flex gap-2 items-center"
          >
            Our Services
            {dropdown ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {dropdown && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-4xl bg-indigo-50 rounded-2xl p-6 grid grid-cols-3 gap-4 shadow-lg z-50 animate-fadeIn">
              {services.map((item, index) => (
                <div
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border-b hover:border-b-indigo-400 transition"
                  key={index}
                >
                  <img src={item.imgPath} alt="icon" className="w-16" />
                  <span className="text-lg font-medium leading-tight capitalize">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </li>

        <li className="cursor-pointer" onClick={() => setDropdown(false)}>
          Join Us
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
