import { Button } from "../button";
import { Select } from "../ui/select";
import { ReactComponent as BrandIcon } from "../../assets/brand.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full overflow-hidden">
      <div className="py-2 pr-6">
        <div className="flex items-center justify-between">
          <div className="py-2">
            <Select />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-text-secondary">
              Already have an account?
            </p>
            <Button
              variant="secondary"
              className="py-1 px-2.5 text-xs h-6 rounded-[6px]"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-full text-center">
        <div className="flex flex-col items-center justify-center h-full container max-w-64 md:max-w-xl  gap-7">
          <div className="flex items-center gap-2.5">
            <LogoIcon />
            <BrandIcon />
          </div>
          <p className="text-text-secondary text-2xl">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
