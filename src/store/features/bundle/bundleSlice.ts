import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BundleState } from "./types";
import { loadBundle } from "../../../utils/localStorage";

const initialState: BundleState = loadBundle() ?? {
  cameras: [],
  sensors: [],
  plans: [],
  protections: [],
  planId: null,
  protectionId: null,
  currentStep: 1,
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },

    addCamera: (
      state,
      action: PayloadAction<{ id: number; colorId: number }>,
    ) => {
      const camera = state.cameras.find(
        (item) => item.id === action.payload.id,
      );

      if (camera) {
        camera.quantity++;
      } else {
        state.cameras.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeCamera: (state, action: PayloadAction<number>) => {
      state.cameras = state.cameras.filter(
        (camera) => camera.id !== action.payload,
      );
    },

    increaseCameraQuantity: (state, action: PayloadAction<number>) => {
      const camera = state.cameras.find(
        (camera) => camera.id === action.payload,
      );
      if (camera) {
        camera.quantity++;
      }
    },

    decreaseCameraQuantity: (state, action: PayloadAction<number>) => {
      const camera = state.cameras.find(
        (camera) => camera.id === action.payload,
      );
      if (!camera) return;
      if (camera.quantity === 1) {
        state.cameras = state.cameras.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        camera.quantity--;
      }
    },

    selectCameraColor: (
      state,
      action: PayloadAction<{ id: number; colorId: number }>,
    ) => {
      const camera = state.cameras.find(
        (camera) => camera.id === action.payload.id,
      );
      if (camera) {
        camera.colorId = action.payload.colorId;
      }
    },

    addSensor: (state, action: PayloadAction<number>) => {
      const sensor = state.sensors.find((item) => item.id === action.payload);

      if (sensor) {
        sensor.quantity++;
      } else {
        state.sensors.push({
          id: action.payload,
          quantity: 1,
        });
      }
    },

    decreaseSensorQuantity: (state, action: PayloadAction<number>) => {
      const sensor = state.sensors.find((item) => item.id === action.payload);
      if (!sensor) return;

      if (sensor.quantity === 1) {
        state.sensors = state.sensors.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        sensor.quantity--;
      }
    },

    selectPlan: (state, action: PayloadAction<number>) => {
      state.planId = action.payload;
    },

    selectProtection: (state, action: PayloadAction<number>) => {
      const existing = state.protections.find(
        (item) => item.id === action.payload,
      );
      if (existing) {
        state.protections = state.protections.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        state.protections.push({ id: action.payload, quantity: 1 });
      }
    },

    resetBundle: () => initialState,
  },
});

export const {
  addCamera,
  removeCamera,
  decreaseCameraQuantity,
  increaseCameraQuantity,
  addSensor,
  decreaseSensorQuantity,
  resetBundle,
  selectCameraColor,
  selectPlan,
  selectProtection,
  setCurrentStep,
} = bundleSlice.actions;

export default bundleSlice.reducer;
