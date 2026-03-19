import Hero from "../../components/HomePage/Hero/Hero";
import OurFlourRange from "../../components/HomePage/OurFlourRange/OurFlourRange";
import PopularProducts from "../../components/HomePage/PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Hero/>
            <OurFlourRange/>
            <PopularProducts/>
        </div>
    );
};

export default Home;