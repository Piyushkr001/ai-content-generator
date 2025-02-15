import { Button } from "@/components/ui/button";
import Navbar from "./dashboard/components/Navbar";
import HeroSection from "./dashboard/components/HeroSection";


export default function Home() {
  return (
    <div>
      <div>
          <Navbar/>
      </div>
      <div>
         <HeroSection/>
      </div>
    </div>
  );
}
