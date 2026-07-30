import { useDispatch, useSelector, useStore } from "react-redux";
import { store, type AppDispatch, type RootState } from "./index";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppStore = useStore.withTypes<typeof store>();
