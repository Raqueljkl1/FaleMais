export interface PhonePlan{
  value: number,
  planName: string,
  originDDD: string,
  destinyDDD: string,
  perMinute: number
}
export const phonePlan = [
  { planName: "FaleMais30", value: 30 },
  { planName: "FaleMais60", value: 60 },
  { planName: "FaleMais120", value: 120 },
];
export const predefinedPlan = [
  { originDDD: "011", destinyDDD: "016", perMinute: 1.90 },
  { originDDD: "016", destinyDDD: "011", perMinute: 2.90 },
  { originDDD: "011", destinyDDD: "017", perMinute: 1.70 },
  { originDDD: "017", destinyDDD: "011", perMinute: 2.70 },
  { originDDD: "011", destinyDDD: "018", perMinute: 0.90 },
  { originDDD: "018", destinyDDD: "011", perMinute: 1.90 },
];
