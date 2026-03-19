import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../Container/Container";

const CTA = () => {
  return (
    <div className="pt-14 bg-secondary-10 text-neutral-15 text-center">
      <Container>
        <h3 className="text-[39px] font-bold leading-11.75">
          Perfect for Everyday Recipes
        </h3>

        <p className="font-OpenSans mt-3">
          Our flours are perfect for preparing a wide variety of traditional and
          everyday dishes.
        </p>

        <div className="flex items-center justify-center mt-6">
          <Button label="Shop Now" variant="primary" />
        </div>
        <img src={IMAGES.heroImage} alt="" className="mt-12 mx-auto" />
      </Container>
    </div>
  );
};

export default CTA;
