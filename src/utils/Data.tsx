export interface IPredefinedPlans {
  array: IphonePlan[]
}
export interface IphonePlan {
  label: string,
  value: number
}
export interface IphonePlans{
  array: IphonePlan[]
}
export const phonePlans:IphonePlan[] = [
  { label: "FaleMais30", value: 30 },
  { label: "FaleMais60", value: 60 },
  { label: "FaleMais120", value: 120 },
];
export interface IPlan {
  label: string,
  value: number,
  originDDD: string,
  destinationDDD: string
}
export const predefinedPlan: IPlan[] = [
  { label: "011 - 016", value: 1.90, originDDD: "011", destinationDDD: "016" },
  { label: "016 - 011", value: 2.90, originDDD: "016", destinationDDD: "011" },
  { label: "011 - 017", value: 1.70, originDDD: "011", destinationDDD: "017" },
  { label: "017 - 011", value: 2.70, originDDD: "017", destinationDDD: "011" },
  { label: "011 - 018", value: 0.90, originDDD: "011", destinationDDD: "018" },
  { label: "018 - 011", value: 1.90, originDDD: "018", destinationDDD: "011" },
];
