import { Button, } from "@material-tailwind/react";
import Slider from "@/components/home/Slider";
import AboutHome from "@/components/home/AboutHome";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div>
        <Slider/>
        <AboutHome/>
        <Services/>
    </div>
  );
}
