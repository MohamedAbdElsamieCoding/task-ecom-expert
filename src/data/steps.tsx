import CameraStep from "../components/steps/CameraSteps";
import PlanStep from "../components/steps/PlanStep";
import SensorStep from "../components/steps/SensorStep";
import ProtectionStep from "../components/steps/ProtectionStep";

export type StepKey = "cameras" | "plans" | "sensors" | "protections";

export interface Step {
  id: number;
  key: StepKey;
  title: string;
  icon: string;
  step: React.ReactNode;
}
export const STEPS: Step[] = [
  {
    id: 1,
    key: "cameras",
    title: "Choose your cameras",
    step: <CameraStep />,
    icon: "/icons/livestream.png",
  },
  {
    id: 2,
    key: "plans",
    title: "Choose your plan",
    step: <PlanStep />,
    icon: "/icons/Vector.png",
  },
  {
    id: 3,
    key: "sensors",
    title: "Choose your sensors",
    step: <SensorStep />,
    icon: "/icons/Group 1417.png",
  },
  {
    id: 4,
    key: "protections",
    title: "Add extra protection",
    step: <ProtectionStep />,
    icon: "/icons/Group 1418.png",
  },
];
