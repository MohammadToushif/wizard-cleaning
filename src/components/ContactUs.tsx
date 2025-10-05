import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Phone, BrushCleaning } from "lucide-react";
import CustomBtn from "./CustomBtn";

function ContactUs() {
  const services = [
    {
      text: "Deep Cleaning",
      value: "deep-cleaning",
    },
    {
      text: "Regular Cleaning",
      value: "regular-cleaning",
    },
    {
      text: "Office Cleaning",
      value: "office-cleaning",
    },
    {
      text: "Move In/Out Cleaning",
      value: "in-out-cleaning",
    },
    {
      text: "Post Construction Cleaning",
      value: "post-construction",
    },
  ];

  return (
    <section className="bg-indigo-50 py-16 px-6 md:px-16">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-sm">
          <iframe
            title="Wizard Cleaning Services Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7342.42280283956!2d72.51681!3d23.05271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0f727069bf%3A0xb52b04208e105ae5!2sWizard%20the%20deep%20cleaning%20services!5e0!3m2!1sen!2sin!4v1759647192538!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 h-[400px] md:h-full w-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Get A Free Quote Today!
          </h3>
          <p className="max-w-md text-xl mb-6">
            Enter your details and get a free quote for your cleaning service.
          </p>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                <Input
                  id="name"
                  placeholder="Enter Your Name"
                  className="pl-10 py-6"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">
                Select your service <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <BrushCleaning className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                <Select required>
                  <SelectTrigger
                    id="service"
                    className="w-full py-3 ps-10 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                  >
                    <SelectValue placeholder="Select a cleaning service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((item, index) => (
                      <SelectItem value={item.value} key={index}>
                        {item.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone number <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Phone className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="pl-10 py-6"
                  required
                />
              </div>
            </div>

            <CustomBtn
              text="Send Me Free Quote Now!"
              type="submit"
              className="py-3 font-semibold"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
