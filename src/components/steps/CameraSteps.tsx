import { cameras } from "../../data/cameras";
import CameraCard from "../CameraCard";

const CameraStep = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cameras.map((camera) => (
        <CameraCard key={camera.id} camera={camera} />
      ))}
    </div>
  );
};

export default CameraStep;
