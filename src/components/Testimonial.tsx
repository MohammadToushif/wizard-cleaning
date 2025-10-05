import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajiv Desouza",
    location: "Ahmedabad",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/home/Rectangle%2048.svg?updatedAt=1745334481236",
    text: "Wizard Cleaning Services transformed our new Ahmedabad apartment! Their deep cleaning was truly magical - every surface gleams and their attention to detail impressed us.",
  },
  {
    name: "Priyank Sharma",
    location: "Himmatnagar",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/portrait-young-indian-businessman-student-sitting-with-pen.jpg?updatedAt=1746160204049",
    text: "When I needed my Himmatnagar home spotless for guests, Wizard Cleaning Services exceeded expectations! Their deep cleaning reached places I didn't even know needed attention.",
  },
  {
    name: "Anand Mehta",
    location: "Ahmedabad",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/indian-business-man-suit-with-golden-bitcoin-modern-office.jpg?updatedAt=1746160203156",
    text: "As a busy professional in Ahmedabad, Wizard Cleaning Services has been my saving grace! Punctual, thorough, and respectful of my space - my home has never looked better.",
  },
  {
    name: "Meet Desai",
    location: "Himmatnagar",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept.jpg?updatedAt=1746160203094",
    text: "Wizard Cleaning Services in Himmatnagar is worth every rupee! Their deep cleaning removed years of kitchen grime and made appliances look brand new again.",
  },
  {
    name: "Vikram Joshi",
    location: "Ahmedabad",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg?updatedAt=1746160202254",
    text: "Best cleaning service in Ahmedabad! Wizard Cleaning Services' attention to detail is unmatched, and they use quality products that leave my home smelling fresh for days.",
  },
  {
    name: "Sumit Agarwal",
    location: "Himmatnagar",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/medium-shot-smiley-man-posing.jpg?updatedAt=1746160662970",
    text: "Wizard Cleaning Services has been a blessing for my elderly parents in Himmatnagar. Their staff is kind and incredibly thorough with their deep cleaning service.",
  },
  {
    name: "Arjun Kapoor",
    location: "Ahmedabad",
    image:
      "https://ik.imagekit.io/xu90j5g5gm/testimonials/smiley-man-holding-camera-front-view.jpg?updatedAt=1746160662950",
    text: "After office renovations in Ahmedabad, Wizard Cleaning Services rescued us with their professional deep cleaning. Our workspace was transformed overnight!",
  },
];

function Testimonial() {
  return (
    <div className="py-16 px-6 md:px-16 bg-white">
      <h4 className="text-3xl font-semibold text-center mb-10">
        Our Valuable Client's Responses
      </h4>

      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 flex justify-center"
            >
              <div className="flex items-center gap-6 border border-gray-200 rounded-2xl shadow-sm p-6 w-full bg-white transition-all hover:shadow-md">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 md:w-60 h-40 md:h-60 rounded-xl object-cover"
                  />
                </div>

                <div className="relative text-left">
                  <p className="italic text-lg mb-3">{item.text}</p>
                  <h6 className="font-semibold text-xl">
                    {item.name}, {item.location}
                  </h6>
                  <img
                    src="/images/quote.svg"
                    className="absolute text-8xl text-indigo-100 right-0 top-0 select-none leading-none"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Testimonial;
