import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { STEPS } from "../../data/steps";

const Accordion = () => {
  const [openStep, setOpenStep] = useState(1);

  return (
    <div className="bg-white p-3 rounded-xl">
      {STEPS.map((step) => (
        <AccordionItem
          key={step.id}
          step={step}
          isOpen={openStep === step.id}
          onToggle={() => setOpenStep(step.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
