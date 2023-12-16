import Image from "next/image";
import calendar from "@/assets/calendar.jpg";
import employee from "@/assets/employee.jpg";
import partner from "@/assets/partner.jpg";
import review from "@/assets/review.jpg";

const AboutUs = () => {
  const data = [
    { id: 1, count: "17", title: "Years Experience", imgSrc: calendar },
    { id: 2, count: "50+", title: "Regular Partner", imgSrc: employee },
    { id: 3, count: "36+", title: "Employees", imgSrc: partner },
    { id: 4, count: "500k+", title: "Happy Costumers", imgSrc: review },
  ];
  
  return (
    <div className="py-14 px-28 space-y-12">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-blue-500 text-2xl font-bold">SINCE 2004</p>
        <p className="text-slate-800 text-5xl font-bold w-4/6 text-center leading-tight">
          Provide High Quality Laundry Services
        </p>
      </div>
      <div className="bg-neutral-50 rounded-lg py-5 px-8 flex space-x-20 items-center justify-center">
        {data.map((item) => (
          <div key={item.id} className="flex space-x-3">
            <div className="flex items-center">
              <Image
                src={item.imgSrc}
                width={35}
                height={42}
                alt="Laundry Image"
              />
            </div>
            <div>
              <p className="text-slate-800 text-2xl font-bold">{item.count}</p>
              <p className="text-zinc-400 text-lg font-normal">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
