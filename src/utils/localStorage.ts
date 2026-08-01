import type { BundleState } from "../store/features/bundle/types";

const STORAGE_KEY = "bundle";

export const saveBundle = (bundle: BundleState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
};

export const loadBundle = (): BundleState | undefined => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return undefined;

  try {
    return JSON.parse(saved);
  } catch {
    return undefined;
  }
};
