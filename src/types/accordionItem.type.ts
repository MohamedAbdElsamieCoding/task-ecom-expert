import type { ReactNode } from "react";

export type AccordionItemProps = {
  step: {
    id: number;
    title: string;
    step: ReactNode;
    icon: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};
