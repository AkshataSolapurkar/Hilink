import Image from "next/image";
import Hero from "./component/Hero";
import Camp from "./component/Camp";
import Guide from "./component/Guide";
import Features from "./component/Features";
import Googleplay from "./component/Googleplay";
import Footer from "./component/footer";


export default function Home() {
  return (
   <>
   <section>
    <div className="container">
      <Hero/>
      <Camp />
      <Guide/>
      <Features/>
      <Googleplay/>
      
    </div>
   </section>
   </>
  );
}
