import { MoveRight } from "lucide-react";
import CustomBtn from "./CustomBtn";

function Services() {
  const services = [
    {
      bannerPath: "/images/bathroom-banner.svg",
      imgPath: "/images/building.svg",
      title: "full bathroom cleaning",
    },
    {
      bannerPath: "/images/house-banner.svg",
      imgPath: "/images/house.svg",
      title: "full home deep cleaning",
    },
    {
      bannerPath: "/images/building-banner.svg",
      imgPath: "/images/building.svg",
      title: "commercial area cleaning",
    },
    {
      bannerPath: "/images/kitchen-banner.svg",
      imgPath: "/images/kitchen.svg",
      title: "full kitchen cleaning",
    },
  ];

  return (
    <div className="text-center py-12">
      <h4 className="text-3xl font-semibold mb-3">
        We Have All Your Cleaning Needs Covered!
      </h4>
      <p className="text-xl">
        From deep cleaning to everyday shine, we've got it all covered—easy,
        fast, and spotless!
      </p>

      <div className="grid sm:grid-cols-4 gap-5 p-12 justify-between">
        {services.map((item, index) => (
          <div
            className="bg-white rounded-xl border-b hover:border-b-indigo-400 transition shadow overflow-hidden"
            key={index}
          >
            <img
              src={item.bannerPath}
              alt="image"
              className="w-full h-48 object-center
               object-cover rounded-xl"
            />
            <div className="relative text-center p-4">
              <img
                src={item.imgPath}
                alt="icon"
                className="w-22 mx-auto absolute left-1/2 transform -translate-x-1/2 -top-10 rounded-full"
              />
              <p className="mt-16 text-xl font-semibold leading-tight capitalize">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CustomBtn text="view all services" varient="outline" icon={MoveRight} className="mx-auto"/>
    </div>
  );
}

export default Services;
