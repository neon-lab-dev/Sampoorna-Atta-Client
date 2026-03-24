/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../../shared/Container/Container";
import { ICONS, IMAGES } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Reusable/Button/Button";
import PopularProductCard from "./PopularProductCard";
import { useState, useRef, useEffect } from "react";

const PopularProducts = ({
  isSearchBarVisible = false,
  isBuyNowButtonVisible,
}: any) => {
  const pathname = useLocation().pathname;
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const categories = [
    "All Categories",
    "Atta & Flours",
    "Rice & Rice Products",
    "Pulses & Lentils",
    "Spices & Masalas",
    "Ready to Eat",
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <div className="py-14 font-Poppins text-neutral-10 flex flex-col gap-12">
        {isSearchBarVisible && (
          <div className="w-full max-w-250 mx-auto">
            <div className="flex items-center px-4 py-4 rounded-xl border border-primary-10 relative">
              {/* Search Icon */}
              <img src={ICONS.search} alt="search" className="size-10" />

              {/* Input */}
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-primary-10/80 placeholder:text-primary-10 max-w-24 md:max-w-full"
              />

              {/* Divider */}
              <div className="h-8 w-0.5 bg-primary-15 mx-4" />

              {/* Category Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center gap-1 cursor-pointer text-primary-15"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span className="whitespace-nowrap block md:hidden">
                    {selectedCategory?.length > 12
                      ? `${selectedCategory?.slice(0, 12)}...`
                      : selectedCategory}
                  </span>
                  <span className="whitespace-nowrap hidden md:block">
                    {selectedCategory}
                  </span>
                  <img
                    src={ICONS.arrowDown}
                    alt="arrow"
                    className={`size-4 transition-transform duration-300 ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                {isCategoryOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary-10 py-2 z-50 animate-fadeIn">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-primary-5 hover:text-neutral-10 cursor-pointer transition-colors duration-200 text-primary-15"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <h2 className="heading mt-5">Popular Products</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 justify-items-center">
          {popularProducts?.map((product) => (
            <PopularProductCard
              key={product.id}
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
