import call from "@/assets/call.jpg";
import checkout from "@/assets/checkout.jpg";
import tshirt from "@/assets/tshirt.jpg";
import map from "@/assets/map.jpg";
import Image from "next/image";

const HowItWorks = () => {
  const data = [
    {
      id: 1,
      count: "01",
      title: "Call us and book order",
      imgSrc: call,
    },
    {
      id: 2,
      count: "02",
      title: "We collect your clothes",
      imgSrc: checkout,
    },
    {
      id: 3,
      count: "03",
      title: "We clean your clothes",
      imgSrc: tshirt,
    },
    {
      id: 4,
      count: "04",
      title: "We deliver to your home",
      imgSrc: map,
    },
  ];

  return (
    <div>
      <div className="flex px-28 py-24 space-x-20">
        <div className="py-4">
          <p className="text-blue-500 text-2xl font-bold">How it works</p>
          <p className="text-slate-800 text-5xl font-bold leading-tight pt-4">
            Simple step to
            <br /> make online booking
          </p>
          <p className="text-zinc-400 text-lg font-normal mt-8 w-96">
            Will be the leading provider cleaning service by creating positive
            impact on all the quality
          </p>
          <button className="bg-amber-400 py-4 px-12 rounded-lg text-white text-lg font-semibold mt-10">
            Get it now
          </button>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-x-32 gap-y-20 px-12 py-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex space-x-10"
            >
              <p className="text-slate-800 text-4xl font-bold">{item.count}</p>
              <div className="space-y-5 w-auto">
                <Image
                  src={item.imgSrc}
                  width={50}
                  height={50}
                  alt="Laundry Image"
                />
                <p className="text-slate-800 text-lg font-semibold w-28">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
