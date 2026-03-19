import Hero from "../../components/HomePage/Hero/Hero";
import OurFlourRange from "../../components/HomePage/OurFlourRange/OurFlourRange";
import PerfectEverydayRecipes from "../../components/HomePage/PerfectEverydayRecipes/PerfectEverydayRecipes";
import PopularProducts from "../../components/HomePage/PopularProducts/PopularProducts";
import WhySampoorna from "../../components/shared/WhySampoorna/WhySampoorna";

const Home = () => {
    return (
        <div>
            <Hero/>
            <OurFlourRange/>
            <PopularProducts/>
            <WhySampoorna/>
            <PerfectEverydayRecipes/>
        </div>
    );
};

export default Home;