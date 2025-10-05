import { MoveRight } from "lucide-react";
import CustomBtn from "./CustomBtn";

function Result() {
  return (
    <div className="text-center px-16 mb-16">
      <h4 className="text-3xl font-semibold mb-3">Our Results</h4>
      <p className="text-xl max-w-4xl mx-auto mb-14">
        Not only do our clients love our work, but they also recommend us. Now,
        it's your turn!
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full lg:w-2/3">
          <img
            src="/images/before-after-hotel.svg"
            alt="before-after-hotel image"
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="w-full h-full max-h-[164] rounded-2xl overflow-hidden">
            <img
              src="/images/Rectangle 38.svg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full max-h-[164] rounded-2xl overflow-hidden">
            <img
              src="/images/Rectangle 39.svg"
              alt="image"
              className="w-full h-full object-cover scale-[1.1]"
            />
          </div>
          <div className="w-full h-full max-h-[164] rounded-2xl overflow-hidden">
            <img
              src="/images/Rectangle 40.svg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <CustomBtn
        text="and many more"
        varient="outline"
        icon={MoveRight}
        className="mx-auto mt-10 font-semibold"
      />
    </div>
  );
}

export default Result;
