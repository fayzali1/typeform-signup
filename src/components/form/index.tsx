import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { FaAngleDown, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../button";

import { MdError } from "react-icons/md";

export default function SignupForm() {
  const [passVisible, setPassVisible] = useState<boolean>(false);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const handlePasswordValidation: Form.CustomMatcher = (value) => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    const pass = value.match(regex);
    if (pass) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = new FormData(event.target as HTMLFormElement);

    const email = payload.get("email");
    const password = payload.get("password");
    const agreement = payload.get("agreement");

    console.log({ email: email, password: password, agreement: agreement });
  };

  return (
    <div className="w-full md:max-w-64">
      {" "}
      <Form.Root onSubmit={handleSubmit} className="space-y-4">
        <Form.Field name="email">
          <Form.Control
            className="border border-gray-100 py-1.5 px-2 text-base rounded w-full"
            asChild
            type="email"
          >
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full"
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="flex items-center gap-1.5 pb-1.5 pt-2 text-danger"
          >
            <MdError />
            <p className="text-sm">This field cannot be left blank</p>
          </Form.Message>
          <Form.Message
            match="typeMismatch"
            className="flex items-center gap-1.5 pb-1.5 pt-2 text-danger"
          >
            <MdError />
            <p className="text-sm">Enter a valid email address</p>
          </Form.Message>
        </Form.Field>{" "}
        <Form.Field name="password">
          <div className="relative">
            <Form.Control
              className="border border-gray-100 py-1.5 px-2 text-base rounded w-full focus:ring-1"
              asChild
            >
              <input
                type={passVisible ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full "
              />
            </Form.Control>
            <button
              type="button"
              onClick={() => setPassVisible(!passVisible)}
              className="text-gray-100 absolute right-3 top-1/2 -translate-y-1/2"
            >
              {!passVisible && <FaEye />}
              {passVisible && <FaEyeSlash />}
            </button>
          </div>
          <Form.Message
            match="valueMissing"
            className="flex items-center gap-1.5 text-left pb-1.5 pt-2 text-danger"
          >
            <MdError />
            <p className="text-sm">This field cannot be left blank</p>
          </Form.Message>
          <Form.Message
            match={handlePasswordValidation}
            className="flex items-start text-left gap-1.5 pb-1.5 pt-2 text-danger"
          >
            <MdError className="h-8 w-8" />
            <p className="text-sm ">
              Use 8 or more characters with a mix of letters, numbers and
              symbols
            </p>
          </Form.Message>
        </Form.Field>
        <Form.Field name="agreement">
          <div className="flex items-start text-left gap-2.5 mb-6">
            <Checkbox.Root className=" inline-flex border border-gray-100 h-5 w-5  px-2 appearance-none data-[state=checked]:bg-background items-center justify-center rounded text-white">
              <Form.Control asChild required>
                <Checkbox.Indicator>
                  <FaCheck className="h-3 w-3 " />
                </Checkbox.Indicator>
              </Form.Control>
            </Checkbox.Root>
            <p className="text-background text-sm">
              I agree to Typeform’s{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.typeform.com/terms-service/"
                className="underline"
              >
                Terms of Service
              </a>
              ,{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.typeform.com/privacy-policy/"
                className="underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.typeform.com/privacy-policy/"
                className="underline"
              >
                Data Processing Agreement
              </a>
              .
            </p>
          </div>
          <Form.Message
            match="valueMissing"
            className="flex items-start gap-1.5 pb-1.5 pt-2 text-danger"
          >
            <MdError className="h-8 w-8" />
            <p className="text-sm text-left">
              Please accept the terms and conditions to finish the signup
            </p>
          </Form.Message>
        </Form.Field>
        <Accordion>
          <OptionItem
            heading="Get useful tips, inspiration, and offers via e-communication."
            name="radOne"
          />
          <OptionItem
            heading="Tailor Typeform to my needs based on my activity."
            name="radTwo"
          />
          <OptionItem
            heading="Enrich my data with select third parties for more relevant content."
            name="radThree"
          />
        </Accordion>
        <Form.Submit asChild>
          <Button className="w-full " size="lg">
            Create my free account
          </Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="pt-2 pl-7">
      <button
        className="flex items-center w-full justify-between"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm text-background ">See Options</p>
        <span
          className={cn(
            "h-8 w-7 flex items-center justify-center transition-transform duration-400 ease-out",
            {
              "rotate-x-180 ": open,
            }
          )}
        >
          <FaAngleDown />
        </span>
      </button>
      <div
        className={cn("transition-all duration-200 ease-in overflow-hidden", {
          "max-h-0": !open,
          "max-h-80": open,
        })}
      >
        {children}
        <p className="text-text-secondary text-left text-sm">
          You can update your preferences in your Profile at any time
        </p>
      </div>
    </div>
  );
};

const OptionItem = ({ heading, name }: { heading: string; name: string }) => {
  return (
    <Form.Field name={name}>
      <div>
        <p className="text-sm text-left text-background ">{heading}</p>

        <RadioGroup.Root className="flex items-center gap-5 pt-2 pb-3">
          <div className="flex items-center gap-4">
            <Form.Control asChild>
              <RadioGroup.Item
                value="yes"
                className="h-5 w-5 rounded-full border border-gray-300 transition-all data-[state=checked]:border-[6px] data-[state=checked]:border-background"
              />
            </Form.Control>
            <label htmlFor="">Yes</label>
          </div>
          <div className="flex items-center gap-4">
            <Form.Control asChild>
              <RadioGroup.Item
                value="no"
                className="h-5 w-5 border rounded-full border-gray-300 transition-all data-[state=checked]:border-[6px] data-[state=checked]:border-background"
              />
            </Form.Control>
            <label htmlFor="">No</label>
          </div>
        </RadioGroup.Root>
      </div>
    </Form.Field>
  );
};
