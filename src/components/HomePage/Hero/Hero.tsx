import { IMAGES } from "../../../assets";
import Container from "../../shared/Container/Container";

const Hero = () => {
  return (
    <div className="font-Poppins">
      <div className="py-6 bg-secondary-10">
        <h3 className="text-lg font-bold text-neutral-15 text-center">
          Healthy Flours for Everyday Cooking
        </h3>
      </div>

      <Container>
        <div className="flex flex-col gap-12 items-center mt-12">
          <div>
            <h1 className="text-[48px] font-bold text-neutral-10 leading-13.75 max-w-[1200px] mx-auto text-center">
              Fresh Atta & Traditional Flours Made for Healthy Meals
            </h1>
            <p className="font-OpenSans text-neutral-10 leading-6 text-center mt-3">
              From soft rotis to nutritious drinks and snacks, our range of
              fresh flours is made from carefully selected grains and pulses.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <button className="px-8 py-4 border border-primary-10 rounded-3xl text-primary-10 text-lg font-bold">
                Explore Our Range
              </button>
              <button className="px-8 py-4 bg-primary-5 border border-primary-5 rounded-3xl text-neutral-10 text-lg font-bold">
                Shop Products
              </button>
            </div>
          </div>

          <img src={IMAGES.heroImage} alt="" />
        </div>
      </Container>

      <div className="py-11 bg-secondary-10">
        <h3 className="text-2xl font-bold text-neutral-15 text-center">
          Quality Ingredients * Freshly Packed * Trusted for everyday meals.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
