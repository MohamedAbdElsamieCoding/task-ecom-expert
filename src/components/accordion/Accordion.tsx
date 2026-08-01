import AccordionItem from "./AccordionItem";
import { STEPS } from "../../data/steps";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCurrentStep } from "../../store/features/bundle/bundleSlice";

const Accordion = () => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector((state) => state.bundle.currentStep);

  return (
    <section className="bg-white md:p-3 rounded-xl">
      {STEPS.map((step) => (
        <AccordionItem
          key={step.id}
          step={step}
          isOpen={currentStep === step.id}
          onToggle={() => dispatch(setCurrentStep(step.id))}
        />
      ))}
    </section>
  );
};

export default Accordion;
