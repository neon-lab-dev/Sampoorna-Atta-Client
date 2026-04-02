import AboutUsHero from "../../components/AboutUsPage/AboutUsHero/AboutUsHero";
import OurGoal from "../../components/AboutUsPage/OurGoal/OurGoal";
import Testimonials from "../../components/shared/Testimonials/Testimonials";
import WhySampoorna from "../../components/shared/WhySampoorna/WhySampoorna";

const AboutUs = () => {
    return (
        <div>
            <AboutUsHero />
            <OurGoal/>
            <Testimonials/>
            <WhySampoorna/>
        </div>
    );
};

export default AboutUs;