import { useState } from "react";
import Navigation from "./Navigation";
import CustomBtn from "./CustomBtn";
import { Menu, MoveRight } from "lucide-react";
import Drawer from "./Drawer";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-18 bg-white shadow-lg flex justify-between items-center px-4 md:px-16 relative">
      <img src="/images/logo.svg" alt="logo" className="w-16" />

      <div className="hidden lg:flex">
        <Navigation />
      </div>

      <div className="hidden lg:flex items-center">
        <CustomBtn
          text="Get a Free Quote"
          varient="outline"
          icon={MoveRight}
          iconType="fill"
          className="rounded-full gap-4"
        />
      </div>

      <div className="relative flex items-center lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-gray-100 hover:bg-gray-200 shadow p-2 px-[10px] rounded-md cursor-pointer"
        >
          <Menu />
        </button>
      </div>

      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
    </header>
  );
}

export default Header;
