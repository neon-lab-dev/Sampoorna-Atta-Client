/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../Container/Container";
import { ICONS, IMAGES } from "../../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks: any = [
    {
      heading: "Quick Links",
      links: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Shop",
          path: "/",
        },
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Contact",
          path: "/contact",
        },
      ],
    },
    {
      heading: "Products",
      links: [
        {
          label: "Whole Wheat Atta",
          path: "",
        },
        {
          label: "Multigrain Atta",
          path: "",
        },
        {
          label: "Gram Flour",
          path: "",
        },
        {
          label: "Chana Sattu",
          path: "",
        },
      ],
    },
    {
      heading: "Customer Support",
      links: [
        {
          label: "My Account",
          path: "/",
        },
        {
          label: "Track Order",
          path: "/",
        },
        {
          label: "Shipping Policy",
          path: "/",
        },
        {
          label: "Refund Policy",
          path: "/",
        },
      ],
    },
    {
      heading: "Contact Details",
      links: [
        {
          label:
            "Sampoorna Foods Pvt. Ltd. Plot No. 24, Industrial Area Phase II Hinjewadi, Pune, Maharashtra 411057 India",
          path: "",
          icon: ICONS.location,
        },
        {
          label: "+91 98765 43210",
          path: "tel:+91 98765 43210",
          icon: ICONS.call,
        },
        {
          label: "support@sampoornafoods.com",
          path: "mailto:support@sampoornafoods.com",
          icon: ICONS.email,
        },
      ],
    },
  ];

  return (
    <div className="py-14 font-Poppins text-neutral-5">
      <Container>
        {/* mt-[151px] */}
        <div className="flex flex-col gap-6 font-Inter py-10 text-neutral-130">
          {/* Company info and social links */}
          <div className="flex flex-col gap-9">
            <div>
              <Link to="/">
                <img
                  src={IMAGES.logo}
                  alt="MITRA Consultancy"
                  className="w-21 h-23"
                />
              </Link>
              <p className="mt-4 font-OpenSans">
                We provide fresh and nutritious flours including whole wheat
                atta, multigrain atta, gram flour, and chana sattu made from
                carefully selected ingredients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-14 justify-between w-full mt-8">
            {quickLinks?.map((item: any) => (
              <div key={item?.heading} className="">
                <h1 className="text-lg font-bold leading-6">{item?.heading}</h1>

                <div className="mt-5 flex flex-col gap-4 font-OpenSans leading-6">
                  {item?.links?.map((link: any) =>
                    link?.path ? (
                      <a
                        key={link?.label}
                        href={link?.path}
                        className="hover:underline flex gap-3 w-fit"
                      >
                        {link?.icon && (
                          <img
                            src={link?.icon}
                            alt=""
                            className="size-5 mt-1"
                          />
                        )}
                        {link.label}
                      </a>
                    ) : (
                      <div key={link?.label} className="flex gap-3">
                        {link?.icon && (
                          <img
                            src={link?.icon}
                            alt=""
                            className="size-5 mt-1"
                          />
                        )}
                        <p>{link.label}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="border border-neutral-15 my-4" />
          <p className="text-start md:text-center font-OpenSans">
            © All Rights Reserved by Sampoorna Fresh
          </p>

          {/* Contact Us Modal */}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
