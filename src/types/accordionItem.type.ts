import type { ReactNode } from "react";

export type AccordionItemProps = {
  step: {
    id: number;
    key: "cameras" | "plans" | "sensors" | "protections";
    title: string;
    step: ReactNode;
    icon: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};
