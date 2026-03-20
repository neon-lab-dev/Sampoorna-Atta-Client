import Container from "../../shared/Container/Container";
import { IMAGES } from "../../../assets";
import { Link } from "react-router-dom";
import Button from "../../Reusable/Button/Button";

const PopularProducts = () => {
  const popularProducts = [
    {
      id: "whole-wheat-atta-5kg",
      image: IMAGES.wholeWheatAtta,
      name: "Sampoorna Whole Wheat Atta",
      weight: "5 Kg",
      price: 275,
    },
    {
      id: "multigrain-atta-1kg",
      image: IMAGES.multigrainAtta,
      name: "Sampoorna Multigrain Atta",
      weight: "1 Kg",
      price: 145,
    },
    {
      id: "chana-besan-400gm",
      image: IMAGES.gramFlour,
      name: "Sampoorna Chana Besan",
      weight: "400 Gm",
      price: 85,
    },
    {
      id: "chana-sattu-200gm",
      image: IMAGES.chanaSattu,
      name: "Sampoorna Chana Sattu",
      weight: "200 Gm",
      price: 45,
    },
    {
      id: "whole-wheat-atta-5kg-2",
      image: IMAGES.wholeWheatAtta,
      name: "Sampoorna Whole Wheat Atta",
      weight: "5 Kg",
      price: 275,
    },
    {
      id: "multigrain-atta-1kg-2",
      image: IMAGES.multigrainAtta,
      name: "Sampoorna Multigrain Atta",
      weight: "1 Kg",
      price: 145,
    },
    {
      id: "chana-sattu-200gm-2",
      image: IMAGES.chanaSattu,
      name: "Sampoorna Chana Sattu",
      weight: "200 Gm",
      price: 45,
    },
  ];
  return (
    <Container>
      <div className="py-14 font-Poppins text-neutral-10 flex flex-col gap-12">
        <h2 className="text-2xl md:text-[39px] font-bold leading-8 md:leading-11.75 text-center">
          Popular Products
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {popularProducts?.map((product) => (
            <div
              key={product?.id}
              className="border border-neutral-15 p-4 md:p-6 rounded-xl flex flex-col justify-between gap-6"
            >
              <img src={product?.image} alt="" className="h-39.75 mx-auto" />
              <div>
                <h3 className="text-base md:text-lg font-bold leading-6">
                  {product?.name}
                </h3>
                <p className="font-OpenSans mt-3">{product?.weight}</p>
                <h3 className="text-lg font-bold leading-6 mt-3">
                  ₹{product?.price}
                </h3>
              </div>

              <Button
                label="Add To Cart"
                variant="secondary"
                className="text-xs px-3"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <Button label="Explore All Products" variant="primary" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PopularProducts;
