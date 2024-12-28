import Image from "next/image";
import CallIcon from "../Icons/CallIcon";

export default function Header() {
  return (
    <section className="relative">
      <header className="bg-white border-b border-[#F2B304] py-3 relative z-10">
        <nav className="max-w-7xl px-4 mx-auto w-full flex  justify-between items-center">
          <a href="">
            <Image src="/logo.png" width={125} height={40} alt="BHive" />
          </a>
          <a href="">
            <CallIcon />
          </a>
        </nav>
      </header>
      <div className="flex justify-between items-start -mt-20 relative z-0">
        <div className="relative">
          <Image
            src="/bg-box.png"
            width={929}
            height={604}
            alt="Background Boxes"
          />
        </div>
        <Image
          src="/header-person.png"
          width={508}
          height={528}
          alt="Person Effect"
        />
      </div>
      <div className="md:flex h-full md:absolute md:top-0 max-w-7xl md:inset-x-0 mx-auto">
        <div className="md:text-4xl lg:text-6xl md:h-full flex-1 md:px-4 xl:px-0 mx-auto flex items-center">
          <p className="font-bold text-center md:text-left w-full md:w-auto">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
        </div>
        <div className="flex-1 h-1 w-full max-w-[508px]"></div>
      </div>
    </section>
  );
}
