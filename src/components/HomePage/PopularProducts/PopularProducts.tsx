/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../../shared/Container/Container";
import { ICONS, IMAGES } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Reusable/Button/Button";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = ({
  isSearchBarVisible=false,
  isBuyNowButtonVisible,
}: any) => {
  const pathname = useLocation().pathname;
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
        {isSearchBarVisible && (
          <div className="w-full max-w-250 mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-primary-10">
              <img src={ICONS.search} alt="" className="size-10" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none text-primary-10/80 placeholder:text-primary-10"
              />
            </div>
          </div>
        )}

        <h2 className="heading mt-5">Popular Products</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 justify-items-center">
          {popularProducts?.map((product) => (
            <PopularProductCard
              product={product}
              isBuyNowButtonVisible={isBuyNowButtonVisible}
            />
          ))}
        </div>

        {pathname === "/" && (
          <div className="flex items-center justify-center">
            <Link to={"/"}>
              <Button label="Explore All Products" variant="primary" />
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PopularProducts;
