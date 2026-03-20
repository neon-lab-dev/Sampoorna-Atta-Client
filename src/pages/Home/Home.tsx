import Hero from "../../components/HomePage/Hero/Hero";
import OurFlourRange from "../../components/HomePage/OurFlourRange/OurFlourRange";
import OurPromiseOfQuality from "../../components/HomePage/OurPromiseOfQuality/OurPromiseOfQuality";
import PerfectEverydayRecipes from "../../components/HomePage/PerfectEverydayRecipes/PerfectEverydayRecipes";
import PopularProducts from "../../components/HomePage/PopularProducts/PopularProducts";
import CTA from "../../components/shared/CTA/CTA";
import Testimonials from "../../components/shared/Testimonials/Testimonials";
import WhySampoorna from "../../components/shared/WhySampoorna/WhySampoorna";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurFlourRange />
      <PopularProducts />
      <WhySampoorna />
      <PerfectEverydayRecipes />
      <Testimonials />
      <OurPromiseOfQuality />
      <CTA />
    </div>
  );
};

export default Home;
