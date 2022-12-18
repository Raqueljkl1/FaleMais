import React from "react";
import { phonePlan, predefinedPlan } from "../utils/Data";

export default function Home() {
  function calculatBondValue(plan: number, minutes: number, rate: number) {
    const surplusMinutes = rate + rate * 0.1;
    const comFaleMais = (minutes - plan) * surplusMinutes;
    const semFaleMais = minutes * rate;
    return console.log(`Com${comFaleMais} Sem${semFaleMais}`);
  }

  calculatBondValue(60, 80, 1.70);
  return (
    <div>
      <text> oi</text>
    </div>
  );
}
