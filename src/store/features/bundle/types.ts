export interface SelectedCamera {
  id: number;
  colorId: number;
  quantity: number;
}

export interface SelectedSensor {
  id: number;
  quantity: number;
}
export interface SelectedPlan {
  id: number;
  quantity: number;
}
export interface SelectedProtections {
  id: number;
  quantity: number;
}

export interface BundleState {
  cameras: SelectedCamera[];
  planId: number | null;
  sensors: SelectedSensor[];
  protections: SelectedProtections[];
  plans: SelectedPlan[];
  protectionId: number | null;
  currentStep: number;
}
