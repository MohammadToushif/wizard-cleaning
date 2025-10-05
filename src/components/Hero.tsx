import { Dot, MoveRight } from "lucide-react";
import CustomBtn from "./CustomBtn";

function Hero() {
  return (
    <div className="relative text-center pt-14 px-4">
      <p className="w-full max-w-lg flex flex-col sm:flex-row justify-center items-center flex-nowrap border border-indigo-700 rounded-full mx-auto font-semibold p-2 sm:py-2 sm:px-6">
        <span>#1 Cleaning services in Ahmedabad</span>
        <span className="hidden sm:inline-block">
          <Dot className="w-10 h-10" />
        </span>
        <span>+91 97252 20107</span>
      </p>

      <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold text-center mx-auto mt-8">
        Transform Your Space with{" "}
        <span className="text-indigo-700">Wizard</span> <br /> The{" "}
        <span className="text-indigo-700">Deep Cleaning</span> Services.
      </h1>

      <div className="w-full flex flex-col sm:flex-row justify-center gap-6 mx-auto mt-12">
        <CustomBtn text="contact us now" className="py-4" />{" "}
        <CustomBtn text="view service" varient="outline" icon={MoveRight} />
      </div>

      <div className="lg:px-16 py-8">
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
