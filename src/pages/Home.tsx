import React, { ReactNode, useState } from "react";
import { Formik, Form, FormikHelpers, Field, FormikProps } from "formik";
import { phonePlans, predefinedPlan, IphonePlan, IPlan } from "../utils/Data";
import GenericDropDown from "../components/GenericDropDown";
import GenericButton from "../components/GenericButton";
import GenericInput from "../components/GenericInput";
import ReactLoading from "react-loading";
import "../styles/index.scss";
import Button from "@mui/material/Button";

interface Values {
  rate: number;
  chooseTheDDD: string;
  chooseThePlanValue: number;
  chooseThePlan: string;
  time: number;
  dddOrigen: string,
  dddDestination: string
}

export default function Home() {
  const [planResult, setPlanResult] = useState({
    comFaleMais: 0,
    semFaleMais: 0,
  });
  const [table, setTable] = useState(false);

  function calculatBondValue(plan: number, minutes: number, rate: number) {
    const surplusMinutes = rate + rate * 0.1;

    const comFaleMais = minutes > plan ? (minutes - plan) * surplusMinutes : 0;

    const semFaleMais = minutes * rate;
    setPlanResult({ comFaleMais, semFaleMais });
  }

  function value(array: Array<IPlan>, value: number) {
    const matchedValue = array.find((plan) => plan.value === value);
    return matchedValue;
  }
  interface Props {
    comFaleMais: number
    semFaleMais: number
    dddOrigen: ReactNode
    dddDestination: ReactNode
    plan: number
    time: number
  }

  function Caculate({ comFaleMais, semFaleMais, dddOrigen, dddDestination, plan, time }:Props) {
    return (
      <table border={1} className="table">
        <tr >
          <td>DDD de Origem</td>
          <td>DDD de Destino </td>
          <td>Tempo</td>
          <td>Plano Fale Mais</td>
          <td>Com FaleMais</td>
          <td>Sem FaleMais</td>

        </tr>
        <tr>
          <td>{dddOrigen} </td>
          <td>{dddDestination} </td>
          <td>{time}</td>
          <td>{plan}</td>
          <td>{`R$ ${comFaleMais.toFixed(2)}`}</td>
          <td>{`R$ ${semFaleMais.toFixed(2)}`}</td>
        </tr>
      </table>
    );
  }
  return (
    <div>
      <div className="divHeader">
        <h1>Fale Mais Brasil </h1>
      </div>
      <div className="background">
        <Formik
          initialValues={{
            rate: predefinedPlan[0].value,
            chooseThePlanValue: phonePlans[0].value,
            chooseTheDDD: predefinedPlan[0].label,
            chooseThePlan: phonePlans[0].label,
            time: 0,
            dddOrigen: predefinedPlan[0].originDDD,
            dddDestination: predefinedPlan[0].destinationDDD,
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
          // console.log(setSubmitting);
            calculatBondValue(Number(values.chooseThePlanValue), Number(values.time), Number(values.rate));
            setTimeout(() => {
              setSubmitting(false);
            }, 3000);
            setTable(true);
          }}


        >
          {({ values, setFieldValue, isSubmitting }: FormikProps<Values>) => (
            <Form className="form" >
              <div className="divInput">
                <GenericDropDown
                  className="divSelect"
                  array={predefinedPlan}
                  handleChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    const teste = value(predefinedPlan, Number(e.target.value));
                    setFieldValue("dddDestination", teste?.destinationDDD);
                    setFieldValue("dddOrigen", teste?.originDDD);
                    setFieldValue("rate", Number(e.target.value));
                  }} name={"rate"} />
                <GenericDropDown
                  className="divSelect"
                  array={phonePlans}
                  name={"chooseThePlanValue"}
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("chooseThePlanValue", e.target.value)} />
                {/* <Button variant="outlined">Outlined</Button> */}
              </div>
              <GenericInput name="time" placeholder="Coloque aqui" className="divSelect" />
              <GenericButton type ="submit" txt = "Submit" className="button" classNameDiv="divButton"/>
              {isSubmitting
                ? <ReactLoading type={"spokes"} color={"#eebbc3"} height={"7%"} width={"7%"} className="loading"/>

                : table
                  ? <Caculate
                      comFaleMais={planResult.comFaleMais}
                      semFaleMais={planResult.semFaleMais}
                      dddOrigen={values.dddOrigen}
                      dddDestination={values.dddDestination}
                      plan={values.chooseThePlanValue}
                      time={values.time}
                    />
                  : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
