export type AccordionItemProps = {
  step: {
    id: number;
    title: string;
    step: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};
