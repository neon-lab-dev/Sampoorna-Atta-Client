import ContactUsForm from "../../components/ContactUsPage/ContactUsForm/ContactUsForm";
import ContactUsHero from "../../components/ContactUsPage/ContactUsHero/ContactUsHero";
import FAQ from "../../components/shared/FAQ/FAQ";

const ContactUs = () => {
    return (
        <div>
            <ContactUsHero/>
            <ContactUsForm/>
            <FAQ/>
        </div>
    );
};

export default ContactUs;