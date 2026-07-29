import { clsx } from "clsx";
import { cameras } from "../../data/cameras";
import CameraCard from "../CameraCard";

const CameraStep = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-2 gap-4">
        {cameras.map((camera, index) => {
          const isLastOddItem =
            index === cameras.length - 1 && cameras.length % 2 !== 0;

          return (
            <div
              key={camera.id}
              className={clsx(
                "w-full md:w-[calc(33.333%-0.67rem)] grow lg:w-full",
                isLastOddItem && "lg:col-span-2 flex justify-center",
              )}
            >
              <div className={isLastOddItem ? "lg:w-1/2" : "w-full h-full"}>
                <CameraCard camera={camera} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-2">
        <button className="w-fit rounded-lg border-2 border-primary px-6 py-1.5 hover:bg-primary/5 transition-colors">
          <p className="text-lg font-semibold text-primary">
            Next: Choose your plan
          </p>
        </button>
      </div>
    </div>
  );
};

export default CameraStep;
