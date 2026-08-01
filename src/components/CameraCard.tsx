import type { CameraCardProps } from "../types/cameraCard.type";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clsx } from "clsx";
import {
  addCamera,
  decreaseCameraQuantity,
  selectCameraColor,
} from "../store/features/bundle/bundleSlice";

const CameraCard = ({ camera }: CameraCardProps) => {
  const selectedCamera = useAppSelector((state) =>
    state.bundle.cameras.find((item) => item.id === camera.id),
  );
  const isSelected = !!selectedCamera;

  const dispatch = useAppDispatch();
  const selectedColorId = selectedCamera?.colorId;
  const handleAdd = () => {
    const defaultColorId = camera.colors?.[0]?.id ?? 0;
    dispatch(
      addCamera({
        id: camera.id,
        colorId: defaultColorId,
      }),
    );
  };

  return (
    <div
      className={clsx(
        "flex justify-between gap-5 rounded-xl border-2 p-3 bg-white w-full h-full md:flex-col lg:flex-row md:w-56.25 lg:w-full transition-colors",
        isSelected
          ? "border-primary"
          : "border-gray-200 hover:border-primary/40",
      )}
    >
      <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-fit">
        {camera.discount! > 0 && (
          <div className="rounded-full py-2 px-4 bg-primary w-fit md:h-fit">
            <p className="text-white text-xs font-semibold whitespace-nowrap">
              Save {camera.discount}%
            </p>
          </div>
        )}
        <div className="flex md:items-center md:justify-center h-20 md:h-32 md:mt-2">
          <img
            src={camera.mainImage}
            alt="camera"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-base">{camera.name}</h3>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs font-medium text-[#1F1F1FBF]/70 ">
              {camera.description}
              <a
                className="underline text-primary text-xs font-normal"
                href={camera.learnMore}
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:flex-wrap">
          {camera.colors?.map((color) => (
            <button
              key={color.id}
              onClick={() =>
                dispatch(
                  selectCameraColor({
                    id: camera.id,
                    colorId: color.id,
                  }),
                )
              }
              className={clsx(
                "text-xs border rounded-md flex items-center w-fit px-2 transition-colors",
                selectedColorId === color.id
                  ? "border-primary bg-primary/10"
                  : "border-gray-300 hover:border-secondary hover:bg-secondary/20",
              )}
            >
              <div className="h-6 w-6">
                <img
                  src={color.image}
                  alt={color.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-medium whitespace-nowrap">
                {color.name}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => dispatch(decreaseCameraQuantity(camera.id))}
              className="border-2 border-gray-300 rounded-sm text-gray-300 text-lg"
            >
              <LuMinus />
            </button>
            {selectedCamera?.quantity ?? 0}{" "}
            <button
              onClick={handleAdd}
              className="bg-gray-300 rounded-sm text-black text-sm p-1"
            >
              <LuPlus />
            </button>
          </div>
          <div className="flex flex-col text-end">
            <span className="text-red-700 text-base font-normal line-through">
              ${camera.oldPrice}
            </span>

            <span className="text-[#575757] text-base font-normal">
              ${camera.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraCard;
