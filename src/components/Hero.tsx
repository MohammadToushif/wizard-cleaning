import { Dot, MoveRight } from "lucide-react";
import CustomBtn from "./CustomBtn";

function Hero() {
  return (
    <div className="relative text-center pt-14">
      <p className="w-fit flex items-center flex-nowrap border border-indigo-700 px-6 rounded-full mx-auto font-semibold">
        #1 Cleaning services in Ahmedabad
        <Dot className="w-10 h-10" />
        +91 97252 20107
      </p>

      <h1 className="text-7xl font-bold text-center mt-8">
        Transform Your Space with{" "}
        <span className="text-indigo-700">Wizard</span> <br /> The{" "}
        <span className="text-indigo-700">Deep Cleaning</span> Services.
      </h1>

      <div className="w-fit flex gap-6 mx-auto mt-12">
        <CustomBtn text="contact us now" />{" "}
        <CustomBtn text="view service" varient="outline" icon={MoveRight} />
      </div>

      <div className="px-16 py-8">
        <img
          src="/images/hero.svg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
