import Slider from "@/components/home/Slider";
import AboutHome from "@/components/home/AboutHome";
import Services from "@/components/home/Services";
import Focus from "@/components/home/Focus";

export default function Home() {
  return (
    <div>
        <Slider/>
        <AboutHome/>
        <Services/>
        <Focus/>
    </div>
  );
}
