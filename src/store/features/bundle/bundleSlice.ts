import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BundleState } from "./types";

const initialState: BundleState = {
  cameras: [],
  sensors: [],
  planId: null,
  protectionId: null,
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {
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

    selectPlan: (state, action: PayloadAction<number>) => {
      state.planId = action.payload;
    },

    selectProtection: (state, action: PayloadAction<number>) => {
      state.protectionId = action.payload;
    },

    resetBundle: () => initialState,
  },
});

export const {
  addCamera,
  removeCamera,
  decreaseCameraQuantity,
  increaseCameraQuantity,
  resetBundle,
  selectCameraColor,
  selectPlan,
  selectProtection,
} = bundleSlice.actions;

export default bundleSlice.reducer;
