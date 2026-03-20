import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";

const CTA = () => {
  return (
    <div className="pt-14 bg-secondary-10 text-neutral-15 text-center">
      <div className="max-w-325 mx-auto px-5 md:px-10 xl:px-5 2xl:px-0">
        <h3 className="heading">
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
      </div>
    </div>
  );
};

export default CTA;
