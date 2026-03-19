import Hero from "../../components/HomePage/Hero/Hero";
import OurFlourRange from "../../components/HomePage/OurFlourRange/OurFlourRange";
import PopularProducts from "../../components/HomePage/PopularProducts/PopularProducts";
import WhySampoorna from "../../components/shared/WhySampoorna/WhySampoorna";

const Home = () => {
    return (
        <div>
            <Hero/>
            <OurFlourRange/>
            <PopularProducts/>
            <WhySampoorna/>
        </div>
    );
};

export default Home;