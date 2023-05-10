/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, schema, materialsParts, unitsMaterial } from "./utils";
import FormTextInput from "../atoms/FormTextInput";
import FormSelect from "../atoms/FormSelect";
import "./style.css";
import CheckboxInput from "../atoms/CheckboxInput";

const AdditionalPartsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [materialParts, setMaterialParts] = useState<string>(
    materialsParts[0].code
  );
  const [unitMaterial, setUnitMaterial] = useState<string>(
    unitsMaterial[0].code
  );
  const [isAdditionalMaterial, toggleAdditionalMaterial] = useState(false);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, reset, setValue } = methods;

  const handleMaterialParts = (value: string) => {
    setMaterialParts(value);
  };
  const handleUnitMaterial = (value: string) => {
    setUnitMaterial(value);
  };
  const handleToggleAdditionalMaterial = () => {
    toggleAdditionalMaterial((prev) => !prev);
  };

  const onSubmit: SubmitHandler<typeof defaultValues> = async (formValues) => {
    console.log(formValues);
    try {
      // TODO: add endpoint
      // await Api.sendNewMaterial(formValues);
      reset(defaultValues);
      setMaterialParts(materialsParts[0].code);
      setValue("materialParts", materialsParts[0].code);
      setUnitMaterial(unitsMaterial[0].code);
      setValue("unitMaterial", unitsMaterial[0].code);
      toggleAdditionalMaterial(false);
    } catch (err) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setValue("materialParts", materialParts);
  }, [materialParts]);

  useEffect(() => {
    setValue("unitMaterial", unitMaterial);
  }, [unitMaterial]);

  useEffect(() => {
    setValue("addNewMaterial", isAdditionalMaterial);
  }, [isAdditionalMaterial]);

  return (
    <div className="wrapperForm">
      <h2>AdditionalPartsForm</h2>
      <FormProvider {...methods}>
        <form
          className="form"
          id="parts-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTextInput
            name="nameParts"
            placeholder="Nazwa Części"
            label="Nazwa Części"
          />
          <CheckboxInput
            name="addNewMaterial"
            checked={isAdditionalMaterial}
            handleToggle={handleToggleAdditionalMaterial}
            title="Dodaj nowy materiał"
          />
          {!isAdditionalMaterial && (
            <FormSelect
              name="materialParts"
              label="Materiał Części"
              array={materialsParts}
              state={materialParts}
              setState={handleMaterialParts}
            />
          )}
          {isAdditionalMaterial && (
            <>
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
            </>
          )}
          <div className="wrapperButton">
            <button className={`primaryBtn ${isLoading ? "loading" : ""}`}>
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdditionalPartsForm;
