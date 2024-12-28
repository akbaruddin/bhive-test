import { SVGProps } from "react";
import {
  AffordableIcon,
  CoffeIcon,
  ComfortIcon,
  EvenIcon,
  GymIcon,
  QuickIcon,
  SportsIcon,
  WifiIcon,
} from "../Icons/ChooseIcons";
import MoboArrow from "../Icons/MoboArrow";

const chooses: Array<{
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  className?: string;
}> = [
  {
    name: "Community Events",
    Icon: EvenIcon,
    className: "md:border-b md:border-r",
  },
  {
    name: "Gym Facilities",
    Icon: GymIcon,
    className: "md:border-b md:border-r",
  },
  {
    name: "High-Speed WiFi",
    Icon: WifiIcon,
    className: "md:border-b lg:border-r",
  },
  {
    name: "Cafe & Tea Bar",
    Icon: CoffeIcon,
    className: "md:border-b md:border-r lg:border-r-0",
  },
  {
    name: "Affordable",
    Icon: AffordableIcon,
    className: "md:border-b md:border-r lg:border-b-0",
  },
  {
    name: "Comfort Lounges",
    Icon: ComfortIcon,
    className: "md:border-b lg:border-r lg:border-b-0",
  },
  {
    name: "Quick Booking",
    Icon: QuickIcon,
    className: "md:border-r lg:border-b-0",
  },
  { name: "Sports Area", Icon: SportsIcon, className: "lg:border-b-0" },
];

export default function ChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-9">
      <h2 className="text-[#263238] font-bold text-2xl md:text-4xl md:mb-10 flex justify-between items-center">
        Why Choose us?
        <MoboArrow className="md:hidden" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-0 mt-5">
        {chooses.map((choose) => (
          <div
            key={choose.name}
            className={`md:p-7 shadow-md md:shadow-none bg-white md:bg-transparent p-2.5 rounded-md md:rounded-none ${choose.className}`}
          >
            <span className="text-center md:text-left block mb-3 md:mb-0 md:flex">
              <choose.Icon className="mx-auto mt-4 mb-3 md:m-0 md:mr-3" />
              {choose.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
