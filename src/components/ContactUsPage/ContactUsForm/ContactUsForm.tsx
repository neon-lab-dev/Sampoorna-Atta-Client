import { useForm } from "react-hook-form";
import TextInput from "../../Reusable/TextInput/TextInput";
import Container from "../../shared/Container/Container";
import Textarea from "../../Reusable/TextArea/TextArea";
import Button from "../../Reusable/Button/Button";

const ContactUsForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <div className="pt-13.25 pb-22.25 space-y-12">
        <h2 className="heading">We’re Here to Help</h2>

        <form className="space-y-8.25 flex items-center flex-col w-full">
          <div className="grid grid-cols-2 gap-8.25 w-full">
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              error={errors.firstName}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              error={errors.lastName}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
            <TextInput
              label="Mobile Number"
              placeholder="Enter your mobile number"
              type="number"
              error={errors.mobileNumber}
              {...register("mobileNumber", {
                required: "Mobile number is required",
              })}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
              {...register("email", {
                required: "Email address is required",
              })}
            />
          </div>
          <TextInput
            label="Subject"
            placeholder="Enter the subject of your message"
            error={errors.subject}
            {...register("subject", {
              required: "Subject is required",
            })}
          />
          <Textarea
            label="Talk to us"
            placeholder="Describe your query"
            error={errors.question}
            rows={8}
            {...register("question", {
              required: "This field is required",
            })}
          />

          <Button label="Submit" type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default ContactUsForm;
