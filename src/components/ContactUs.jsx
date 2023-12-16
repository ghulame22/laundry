import Image from "next/image";
import call from "@/assets/call.jpg";
import email from "@/assets/email.jpg";
import map2 from "@/assets/map2.jpg";

const ContactUs = () => {
  const data = [
    { id: 1, count: "Call", title: "084524145547", imgSrc: call },
    { id: 2, count: "Email", title: "loremipsum@gmail.com", imgSrc: email },
    { id: 3, count: "Location", title: "Bandung, Indonesia", imgSrc: map2 },
  ];

  return (
    <div>
      <div className="flex px-28 py-20 space-x-52">
        <div className="py-4">
          <p className="text-slate-800 text-5xl font-bold leading-tight pt-4">
            Lets talk with our
            <br />
            awesome team
          </p>
          <p className="text-zinc-400 text-lg font-normal mt-7 mb-14 w-96">
            Will be the leading provider cleaning service by creating positive
            impact on all the quality
          </p>
          {data.map((item) => (
            <div key={item.id} className="flex space-x-3 mt-10">
              <div className="flex items-center">
                <Image
                  src={item.imgSrc}
                  width={42}
                  height={42}
                  alt="Laundry Image"
                />
              </div>
              <div>
                <p className="text-slate-800 text-2xl font-bold">
                  {item.count}
                </p>
                <p className="text-zinc-400 text-lg font-normal">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-neutral-50 rounded-2xl py-5 px-28 pt-20 flex flex-col space-y-10">
          <div className="flex flex-col space-y-2">
            <label className="text-slate-800 text-lg font-normal">
              Your name
            </label>
            <input className="p-2 pl-16 rounded-lg" placeholder="Full name here" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-slate-800 text-lg font-normal">
              Your mail
            </label>
            <input
              className="p-2 pl-16 rounded-lg"
              placeholder="Your email address"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-slate-800 text-lg font-normal">
              Message
            </label>
            <textarea
              className="p-2 rounded-lg"
              placeholder="Type your message here"
              rows="5"
              cols="33"
            />
          </div>
          <button className="bg-amber-400 py-4 px-12 rounded-lg text-white text-lg font-semibold mt-10">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
