import { LuChevronDown } from "react-icons/lu";
import type { AccordionItemProps } from "../../types/accordionItem.type";
import { clsx } from "clsx";
import { STEPS } from "../../data/steps";

const AccordionItem = ({ isOpen, onToggle, step }: AccordionItemProps) => {
  const Icon = step.icon;

  return (
    <div
      className={clsx(
        "mb-4 rounded-xl  transition-colors duration-300",
        isOpen ? "bg-[#EDF4FF]" : "bg-white",
      )}
    >
      <button onClick={onToggle} className="w-full p-5">
        <div className="mb-2">
          <p className="text-xs font-normal text-[#484848] text-start">
            Step {step.id} OF {STEPS.length}
          </p>
          <div className="mt-2 border-b border-gray-900" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon className="text-2xl text-gray-400" />
            <h3 className="text-xl font-semibold text-[#0B0D10]">
              {step.title}
            </h3>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-primary text-sm font-semibold">2 selected</p>
            <LuChevronDown
              className={clsx(
                "transition-transform duration-300",
                isOpen && "rotate-180",
              )}
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="p-5">{step.step}</div>
      )}
    </div>
  );
};

export default AccordionItem;
