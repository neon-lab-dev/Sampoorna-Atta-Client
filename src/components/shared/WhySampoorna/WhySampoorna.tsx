import { ICONS } from "../../../assets";
import Container from "../Container/Container";

const WhySampoorna = () => {
  const features = [
    {
      icon: ICONS.highFibre,
      title: "High Fibre",
      description: "Supports healthy digestion and balanced meals.",
    },
    {
      icon: ICONS.richProtein,
      title: "Rich in Protein",
      description: "Helps keep you energized throughout the day.",
    },
    {
      icon: ICONS.selectedIngredients,
      title: "Carefully Selected Ingredients",
      description: "Made using quality grains and pulses.",
    },
    {
      icon: ICONS.hygienicProcessing,
      title: "Hygienic Processing",
      description: "Ground and packed with strict quality standards.",
    },
  ];

  return (
    <div className="py-14 bg-secondary-10 text-neutral-15 text-center">
      <Container>
        <h3 className="text-[39px] font-bold leading-11.75">
          Natural Goodness In Every Pack
        </h3>

        <div className="grid grid-cols-4 gap-10 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.icon} alt={feature.title} className="size-12" />
              <h4 className="text-lg font-bold leading-6 mt-6">
                {feature.title}
              </h4>
              <p className="font-OpenSans mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhySampoorna;
