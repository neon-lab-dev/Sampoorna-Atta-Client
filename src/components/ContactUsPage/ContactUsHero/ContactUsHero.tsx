import Container from "../../shared/Container/Container";

const ContactUsHero = () => {
  return (
    <div className="bg-secondary-10 h-121.25 flex justify-center items-center">
      <Container>
        <h1 className="text-background-5 text-center font-Poppins text-[39px] font-bold leading-11.75">
          Get in Touch With Us
        </h1>
        <p className="text-background-5 text-center font-OpenSans leading-6 mt-3">
          Whether it’s a query or feedback, we’re here to listen and help.
          Connect with our team and we’ll get back to you as soon as possible.
        </p>
      </Container>
    </div>
  );
};

export default ContactUsHero;
