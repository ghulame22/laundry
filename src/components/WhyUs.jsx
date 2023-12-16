import Image from "next/image";
import tick from "@/assets/tick.jpg";

const WhyUs = () => {
  const data = [
    { id: 1, title: "100% Satisfaction Guarantee" },
    { id: 2, title: "Fast & High Quality" },
    { id: 3, title: "100% Cashback Guaranteed" },
  ];

  return (
    <div className="p-28 space-y-7">
      <div className="flex items-center">
        <div>
          <p className="text-slate-800 text-5xl font-bold w-4/5">
            The Best Guarantee In The Business.
          </p>
        </div>
        <div className="justify-center flex">
          <p className="w-4/6 text-zinc-400 text-lg font-normal ">
            Will be the leading provider Cleaning service by creating positrve
            impact on all the quality
          </p>
        </div>
      </div>
      <div className="flex space-x-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-50 rounded-full py-5 px-8 flex space-x-5 w-96 items-center justify-center"
          >
            <Image src={tick} width={50} height={50} alt="Laundry Image" />
            <p className="text-slate-800 text-2xl font-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyUs;
