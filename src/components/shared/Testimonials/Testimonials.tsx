/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IMAGES } from "../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vishakha Patnaik",
      text: "The quality of atta and besan is excellent. Fresh and great for everyday cooking.",
      rating: 5,
    },
    {
      name: "Patnaik",
      text: "Fresh and great for everyday cooking.",
      rating: 5,
    },
    {
      name: "Vishakha",
      text: "The quality of atta and besan is excellent.",
      rating: 5,
    },
    {
      name: "Vishakha Patnaik",
      text: "The quality of atta and besan is excellent. Fresh and great for everyday cooking.",
      rating: 5,
    },
    {
      name: "Patnaik",
      text: "Fresh and great for everyday cooking.",
      rating: 5,
    },
    {
      name: "Vishakha",
      text: "The quality of atta and besan is excellent.",
      rating: 5,
    },
  ];

  return (
    <div>
      <div className="py-14 font-Poppins text-neutral-10">
        <h2 className="text-2xl md:text-[39px] font-bold leading-8 md:leading-11.75 text-center">
          What Our Customers Say
        </h2>

        <div className="mt-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-50 blur-[1px]"
                    }`}
                  >
                    <img
                      src={IMAGES.dummyAvatar}
                      alt={testimonial.name}
                      className="size-31 rounded-full object-cover"
                    />

                    <div className="flex items-center gap-3 justify-center mt-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                            fill="#DD9427"
                            stroke="#DD9427"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                    </div>

                    <h3 className="text-lg leading-6 text-center mt-6 font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="font-OpenSans mt-3 text-center max-w-xs">
                      “{testimonial.text}”
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Add custom styles for Swiper pagination and blur effect */}
      <style>{`
        .testimonial-swiper {
          padding: 20px 0 40px 0;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #dd9427;
          opacity: 0.5;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #dd9427;
        }

        .testimonial-swiper .swiper-pagination {
          bottom: 0;
        }

        .testimonial-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
