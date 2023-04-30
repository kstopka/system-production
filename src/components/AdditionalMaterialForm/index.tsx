import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, schema, unitsMaterial } from "./utils";
import FormTextInput from "../atoms/FormTextInput";
import FormSelect from "../atoms/FormSelect";
import "./style.css";

const AdditionalMaterialForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [unitMaterial, setUnitMaterial] = useState<string>(
    unitsMaterial[0].code
  );
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  const handleUnitMaterial = (value: string) => {
    setUnitMaterial(value);
  };

  const onSubmit: SubmitHandler<typeof defaultValues> = async (formValues) => {
    console.log({
      ...formValues,
      unitMaterial,
    });
    try {
      // TODO: added endpoint
      // await Api.sendNewMaterial({
      //   ...formValues,
      //   unitMaterial
      // });
      reset(defaultValues);
    } catch (err) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapperForm">
      <FormProvider {...methods}>
        <form
          className="form"
          id="material-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput
            name="nameMaterial"
            placeholder="Nazwa Materiału"
            label="Nazwa Materiału"
          />
          <FormTextInput
            name="priceMaterial"
            placeholder="Cena Materiału"
            label="Cena Materiału"
          />
          <FormSelect
            name="unitMaterial"
            label="Jednostka Materiału"
            array={unitsMaterial}
            state={unitMaterial}
            setState={handleUnitMaterial}
          />
          <div className="wrapperButton">
            <button className={isLoading ? "loading" : ""}>
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdditionalMaterialForm;
