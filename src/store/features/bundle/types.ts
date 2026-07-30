export interface SelectedCamera {
  id: number;
  colorId: number;
  quantity: number;
}

export interface SelectedSensor {
  id: number;
  quantity: number;
}

export interface BundleState {
  cameras: SelectedCamera[];
  planId: number | null;
  sensors: SelectedSensor[];
  protectionId: number | null;
}
