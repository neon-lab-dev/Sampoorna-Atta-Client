import { IMAGES } from "../../../assets";
import Container from "../../shared/Container/Container";

const PerfectEverydayRecipes = () => {
  const dishes = [
    {
      icon: IMAGES.softRotis,
      title: "Soft Rotis & Chapatis",
      description: "Perfect for everyday meals",
    },
    {
      icon: IMAGES.pakora,
      title: "Pakoras & Snacks",
      description: "Great for evening snacks",
    },
    {
      icon: IMAGES.sattuDrink,
      title: "Healthy Sattu Drinks",
      description: "Refreshing and nutritious",
    },
    {
      icon: IMAGES.multigrainMeals,
      title: "Multigrain Meals",
      description: "Wholesome and balanced",
    },
  ];
  return (
    <Container>
      <div className="py-14 font-Poppins text-neutral-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-[39px] font-bold leading-8 md:leading-11.75 text-center">
            Perfect for Everyday Recipes
          </h2>
          <p className="font-OpenSans mt-3">
            Our flours are perfect for preparing a wide variety of traditional
            and everyday dishes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {dishes?.map((dish) => (
            <div key={dish?.title} className="">
              <img src={dish?.icon} alt="" className="h-[151px] md:h-66" />
              <h3 className="text-base md:text-lg font-bold leading-6 text-center">
                {dish?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PerfectEverydayRecipes;
