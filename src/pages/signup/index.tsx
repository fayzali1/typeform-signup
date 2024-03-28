import banner from "../../assets/banner.webp";
import Form from "../../components/form";
import FormWrapper from "../../components/formWrapper";

export default function SignUp() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden grow shrink basis-0 md:flex flex-col items-center justify-center gap-9 relative ">
        <div className="text-center text-4xl text-white">
          <p className="">Sign up</p>
          <p>and come on in</p>
        </div>
        <img src={banner} alt="" />
        <p className="text-sm text-white absolute bottom-6">© Typeform</p>
      </div>
      <div className="bg-card  grow shrink basis-[9%] relative before:content-[''] before:absolute before:-left-6 before:w-6 before:h-full before:bg-card before:rounded-l-xl">
        <FormWrapper>
          <Form />
        </FormWrapper>
      </div>
    </div>
  );
}
