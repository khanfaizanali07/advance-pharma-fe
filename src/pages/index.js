import { Button, } from "@material-tailwind/react";
import Slider from "@/components/home/Slider";
import AboutHome from "@/components/home/AboutHome";

export default function Home() {
  return (
    <div>
        <Slider/>
        <AboutHome/>
    </div>
  );
}
