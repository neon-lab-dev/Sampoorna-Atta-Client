/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "../../Reusable/Button/Button";

const PopularProductCard = ({ product, isBuyNowButtonVisible=false }: any) => {
  return (
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
        <h3 className="text-lg font-bold leading-6 mt-3">₹{product?.price}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {isBuyNowButtonVisible && (
          <Button label="Buy Now" variant="primary" className="text-xs px-3" />
        )}

        <Button
          label="Add To Cart"
          variant="secondary"
          className="text-xs px-3"
        />
      </div>
    </div>
  );
};

export default PopularProductCard;
