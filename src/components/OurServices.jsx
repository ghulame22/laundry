import Image from "next/image";
import ourservices from "@/assets/ourservices.jpg";
import hanger from "@/assets/hanger.svg";
import tshirt from "@/assets/tshirt.jpg";
import jacket from "@/assets/jacket.jpg";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Dry Cleaning",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do",
      imgSrc: hanger,
    },
    {
      id: 2,
      title: "Laundry Services",
      desc: "Lorem ipsum dolor sit amet, consectetur adised do eiusmod",
      imgSrc: tshirt,
    },
    {
      id: 3,
      title: "Leather and Suade",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do",
      imgSrc: jacket,
    },
  ];

  return (
    <div className="flex p-28 space-x-20">
      <div className="text-center">
        <Image src={ourservices} width={488} height={567} alt="Laundry Image" />
      </div>
      <div className="py-4 space-y-10">
        <p className="text-slate-800 text-5xl font-bold leading-tight">
          Services we provide
        </p>
        <div>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex space-x-10 p-6 ${
                index === 0 ? "bg-amber-400 rounded-2xl" : ""
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={item.imgSrc}
                  width={62}
                  height={64}
                  alt="Laundry Image"
                />
              </div>
              <div className="w-80">
                <p
                  className={`text-slate-800 text-2xl font-bold ${
                    index === 0 ? "!text-white" : ""
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`text-zinc-400 text-lg font-normal ${
                    index === 0 ? "!text-white" : ""
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
