import { type RootState } from "../../index.ts";

export const selectBundle = (state: RootState) => state.bundle;

export const selectSelectedCameras = (state: RootState) => state.bundle.cameras;

export const selectPlan = (state: RootState) => state.bundle.planId;

export const selectProtection = (state: RootState) => state.bundle.protectionId;

export const selectTotalItems = (state: RootState) =>
  state.bundle.cameras.reduce((total, camera) => total + camera.quantity, 0);
