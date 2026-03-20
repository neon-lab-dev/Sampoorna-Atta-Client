import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../shared/Container/Container";

const OurFlourRange = () => {
  const products = [
    {
      image: IMAGES.wholeWheatAtta,
      name: "Whole Wheat Atta",
      description: "Perfect for soft and wholesome rotis.",
    },
    {
      image: IMAGES.multigrainAtta,
      name: "Multigrain Atta",
      description: "A nutritious blend of multiple grains for balanced meals.",
    },
    {
      image: IMAGES.gramFlour,
      name: "Gram Flour (Besan)",
      description: "Ideal for snacks, batters, and traditional recipes.",
    },
    {
      image: IMAGES.chanaSattu,
      name: "Chana Sattu",
      description:
        "A protein-rich flour perfect for refreshing drinks and healthy meals.",
    },
  ];
  return (
    <Container>
      <div className="py-14 font-Poppins text-neutral-10 flex flex-col gap-12">
        <h2 className="heading">
          Our Flour Range
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 justify-items-center">
          {products?.map((product) => (
            <div
              key={product?.name}
              className="max-w-75 flex flex-col items-center text-center"
            >
              <img src={product?.image} alt="" className="h-70.75" />
              <h3 className="text-lg font-bold leading-6 mt-6">
                {product?.name}
              </h3>
              <p className="font-OpenSans mt-3">{product?.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <Button label="Shop All Products" variant="primary" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OurFlourRange;
