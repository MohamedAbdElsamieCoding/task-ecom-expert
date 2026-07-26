import type { AccordionItemProps } from "../../types/accordionItem.type";

const AccordionItem = ({ isOpen, onToggle, step }: AccordionItemProps) => {
  return (
    <div>
      <button onClick={onToggle}>{step.step}</button>

      {isOpen && <p>{step.title}</p>}
    </div>
  );
};

export default AccordionItem;
