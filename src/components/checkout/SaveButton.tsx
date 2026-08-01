import { toast } from "react-hot-toast";
import { useAppSelector } from "../../store/hooks";
import { saveBundle } from "../../utils/localStorage";

const SaveButton = () => {
  const bundle = useAppSelector((state) => state.bundle);

  const handleSave = () => {
    saveBundle(bundle);

    toast.success("System saved successfully!");
  };
  return (
    <button
      onClick={handleSave}
      className="underline font-normal text-xs italic text-center"
    >
      Save my system for later
    </button>
  );
};

export default SaveButton;
