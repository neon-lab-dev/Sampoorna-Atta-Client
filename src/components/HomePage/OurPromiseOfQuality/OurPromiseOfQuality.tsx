import { IMAGES } from "../../../assets";
import Container from "../../shared/Container/Container";

const OurPromiseOfQuality = () => {
  const firstRowImages = [IMAGES.banner1, IMAGES.banner2];
  return (
    <Container>
      <div className="py-14 font-Poppins text-neutral-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="heading">
            Our Promise of Quality
          </h2>
          <p className="font-OpenSans mt-3">
            We carefully source grains and pulses, process them using hygienic
            methods, and package them to preserve freshness and nutrition.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-6 mt-12">
          {firstRowImages?.map((img, id) => (
            <img key={id} src={img} alt="" className="w-38 md:w-[330px] lg:w-[450px] xl:w-fit" />
          ))}
        </div>
        <img src={IMAGES.banner3} alt="" className="mt-3 mx-auto" />
      </div>
    </Container>
  );
};

export default OurPromiseOfQuality;
