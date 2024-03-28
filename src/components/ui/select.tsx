import { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

const data = ["English", "Español"];

export const Select = () => {
  const [value, setValue] = useState<string>(data[0]);
  const [open, setOpen] = useState<boolean>(false);

  const handleSelection = (value: string) => {
    setValue(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-text-secondary flex items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <BsGlobeAmericas />
        <div className="flex items-center text-sm">
          <span>{value}</span>

          <FaAngleDown className="h-3 w-6" />
        </div>
      </button>
      {open && (
        <div className="shadow-[0px_2px_5px_0.5px_#1919191f] absolute w-auto top-8 py-2 rounded-md text-background">
          {data.map((val, index) => (
            <div
              key={index}
              onClick={() => handleSelection(val)}
              className="py-1.5 px-6 hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-extralight text-base leading-loose">{val}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
