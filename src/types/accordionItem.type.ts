import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type AccordionItemProps = {
  step: {
    id: number;
    title: string;
    step: ReactNode;
    icon: IconType;
  };
  isOpen: boolean;
  onToggle: () => void;
};
