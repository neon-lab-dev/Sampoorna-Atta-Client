import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../shared/Container/Container";

const ShopHero = () => {
  return (
    <div className="font-Poppins relative h-[1000px]">
      <div className="py-6 bg-secondary-10">
        <h3 className="text-lg font-bold text-neutral-15 text-center">
          Healthy Flours for Everyday Cooking
        </h3>
      </div>

      <Container>
        <div className="flex flex-col gap-12 items-center mt-12 relative z-10">
          <div>
            <h1 className="text-[32px] md:text-[48px] font-bold text-neutral-10 leading-9.75 md:leading-13.75 max-w-300 mx-auto text-center">
              Premium Atta & Everyday Flours
            </h1>
            <p className="font-OpenSans text-neutral-10 leading-6 text-center mt-3">
              Made from carefully selected grains for everyday cooking
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
              <Button
                label="Shop Products"
                variant="primary"
                className="w-50 md:w-fit"
              />
              <Button label="Explore Our Range" variant="secondary" />
            </div>
          </div>
        </div>
      </Container>
      <img
        src={IMAGES.shopHeroImg}
        alt=""
        className="h-[820px] w-full absolute top-0 bottom-0 object-cover lg:mt-17 2xl:mt-19"
      />

      <div className="py-4 md:py-11 bg-secondary-10 absolute bottom-0 w-full">
        <h3 className="text-xs md:text-2xl font-bold text-neutral-15 text-center">
          Quality Ingredients * Freshly Packed * Trusted for everyday meals.
        </h3>
      </div>
    </div>
  );
};

export default ShopHero;
