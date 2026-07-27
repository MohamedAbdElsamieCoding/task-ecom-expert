import { TbDeviceComputerCamera } from "react-icons/tb";
import { FaShield } from "react-icons/fa6";
import { MdOutlineSensors } from "react-icons/md";
import { FcDataProtection } from "react-icons/fc";

import CameraStep from "../components/steps/CameraSteps";

export const STEPS = [
  {
    id: 1,
    title: "Choose your cameras",
    step: <CameraStep />,
    icon: TbDeviceComputerCamera,
  },
  {
    id: 2,
    title: "Choose your plan",
    step: "STEP 2 OF 4",
    icon: FaShield,
  },
  {
    id: 3,
    title: "Choose your sensors",
    step: "STEP 3 OF 4",
    icon: MdOutlineSensors,
  },
  {
    id: 4,
    title: "Add extra protection",
    step: "STEP 4 OF 4",
    icon: FcDataProtection,
  },
];
