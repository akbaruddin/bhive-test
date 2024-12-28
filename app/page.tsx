import Copyright from "@/components/Copyright";
import ChooseUs from "@/components/home/ChooseUs";
import Header from "@/components/home/Header";
import Spaces from "@/components/home/Spaces";
import MoboLinks from "@/components/MoboLinks";

export default function Home() {
  return (
    <section className="size-full text-[#605F5F]">
      <Header />
      <ChooseUs />
      <Spaces />
      <MoboLinks />
      <Copyright />
    </section>
  );
}
