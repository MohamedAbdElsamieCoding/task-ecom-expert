import type { CameraCardProps } from "../types/cameraCard.type";
import { LuMinus, LuPlus } from "react-icons/lu";

const CameraCard = ({ camera }: CameraCardProps) => {
  return (
    <div className="rounded-xl border-2 border-primary/70 p-4 grid grid-cols-2 gap-1 bg-white w-full">
      <div className="flex flex-col gap-2">
        <div className="rounded-full py-2 px-4 bg-primary w-fit">
          <p className="text-white text-xs font-semibold">
            Save {camera.discount} %
          </p>
        </div>
        <img src={camera.mainImage} alt="camera" className="h-24 w-24" />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-base">{camera.name}</h3>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs font-normal text-[#1F1F1FBF]/70">
              {camera.description}
            </p>
            <a
              className="underline text-primary text-xs font-normal cursor-pointer"
              href={camera.learnMore}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 flex-wrap">
            {camera.colors.map((color) => (
              <button
                key={color.id}
                className="text-xs border rounded-md hover:border-secondary hover:bg-secondary/20 flex items-center w-fit px-2"
              >
                <img src={color.image} className="h-7 w-7" alt={color.name} />
                <span className="text-xs font-medium whitespace-nowrap">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button className="border-2 border-gray-300 rounded-sm text-gray-300 cursor-pointer text-lg">
              <LuMinus />
            </button>
            <span>1</span>
            <button className="bg-gray-300 rounded-sm text-black cursor-pointer text-sm p-1">
              <LuPlus />
            </button>
          </div>
          <div className="flex flex-col gap-0.5 text-end">
            <span className="text-red-700 text-base font-normal line-through">
              ${camera.price}
            </span>
            <span className="text-[#575757] text-base font-normal">
              ${camera.discount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraCard;
