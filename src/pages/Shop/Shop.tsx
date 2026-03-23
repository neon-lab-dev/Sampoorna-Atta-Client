import OurFlourRange from "../../components/HomePage/OurFlourRange/OurFlourRange";
import PopularProducts from "../../components/HomePage/PopularProducts/PopularProducts";
import CTA from "../../components/shared/CTA/CTA";
import Testimonials from "../../components/shared/Testimonials/Testimonials";
import WhySampoorna from "../../components/shared/WhySampoorna/WhySampoorna";
import ShopHero from "../../components/ShopPage/ShopHero/ShopHero";

const Shop = () => {
  return (
    <div>
      <ShopHero />
      <PopularProducts isSearchBarVisible={true} isBuyNowButtonVisible={true} />
      <CTA />
      <OurFlourRange />
      <Testimonials />
      <WhySampoorna />
    </div>
  );
};

export default Shop;
