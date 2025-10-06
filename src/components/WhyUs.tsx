import CustomBtn from "./CustomBtn";

function WhyUs() {
  const whyUs = [
    {
      icon: "/images/users.svg",
      title: "Experienced Professionals",
      position: "top-16 left-[10%]",
    },
    {
      icon: "/images/smile.svg",
      title: "Reliability",
      position: "left-[5%] top-1/2 -translate-y-1/2",
    },
    {
      icon: "/images/tools.svg",
      title: "Advanced Equipment",
      position: "bottom-4 left-[10%]",
    },
    {
      icon: "/images/leaf.svg",
      title: "Eco-friendly Solutions",
      position: "top-16 right-[10%]",
    },
    {
      icon: "/images/money.svg",
      title: "Best Price",
      position: "right-[5%] top-1/2 -translate-y-1/2",
    },
    {
      icon: "/images/grid.svg",
      title: "Customized Services",
      position: "bottom-4 right-[10%]",
    },
  ];

  return (
    <div className="relative text-center px-4 md:px-16 mb-16">
      <h4 className="text-3xl font-semibold mb-3">Why Choose Us?</h4>
      <p className="text-xl max-w-4xl mx-auto">
        At Wizard, we understand that cleanliness is essential for a healthy
        living and working environment. Our commitment to excellence, attention
        to detail, and customer satisfaction sets us apart in the cleaning
        industry across Ahmedabad.
      </p>
      <img
        src="/images/Ornament 12.svg"
        alt="degisn"
        className="absolute top-0 right-0"
      />

      <div className="relative py-12 space-y-6">
        <div className="w-full md:hidden space-y-6">
          {whyUs
            .filter((_, index) => index < 3)
            .map((item, index) => (
              <div
                key={index}
                className={`max-w-md flex items-center justify-center gap-4 bg-indigo-50 rounded-4xl p-5 border-2 border-indigo-400 mx-auto`}
              >
                <img src={item.icon} alt="icon" className="w-16 h-16" />
                <span className="text-xl leading-tight capitalize">
                  {item.title}
                </span>
              </div>
            ))}
        </div>
        <div className="w-full md:1/2 mt-6">
          <img
            src="/images/why-us.webp"
            alt="why-us image"
            className="w-full max-w-[640px] mx-auto"
          />
        </div>
        <div className="w-full md:hidden space-y-6 mt-10">
          {whyUs
            .filter((_, index) => index > 2)
            .map((item, index) => (
              <div
                key={index}
                className={`max-w-md flex items-center justify-center gap-4 bg-indigo-50 rounded-4xl p-5 border-2 border-indigo-400 mx-auto`}
              >
                <img src={item.icon} alt="icon" className="w-16 h-16" />
                <span className="text-xl leading-tight capitalize">
                  {item.title}
                </span>
              </div>
            ))}
        </div>

        {/* only for mediam and above */}
        <div className="hidden md:block">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className={`absolute max-w-[240px] flex items-center gap-4 bg-indigo-50 rounded-4xl p-5 border-2 border-indigo-400 ${item.position}`}
            >
              <img src={item.icon} alt="icon" className="w-16 h-16" />
              <span className="text-xl leading-tight capitalize ">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto p-6 lg:p-16 rounded-2xl mt-8 md:mt-12"
        style={{
          background: 'url("/images/discount-banner.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:max-w-4xl px-4 mx-auto mb-3">
          <h1 className="text-4xl lg:text-6xl font-semibold text-center text-white mb-6">
            Get 25% Discount on your first Cleaning Services.
          </h1>
          <CustomBtn
            text="contact us now"
            className="mx-auto bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white py-3 font-medium"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
