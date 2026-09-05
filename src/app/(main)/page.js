import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import FeaturedDrop from "@/components/home/FeaturedDrop";
import OriginDrop from "@/components/home/OriginDrop";
import ZenjiHome from "@/components/home/ZenjiHome";


export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedDrop />
      <OriginDrop />
      <Featured />
      <ZenjiHome />
    </>
  );
}



