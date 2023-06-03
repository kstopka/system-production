/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, schema } from "./utils";
import FormTextInput from "../atoms/FormTextInput";
import "./style.css";
import { AdditionalMaterialFormProps } from "./types";
import { AppCtx, useActions } from "../../contexted";
import { IAppActions } from "../../contexted/App/types";
import Api from "../../fakeAPI/API";
import Alert from "../atoms/Alert";
import { useAlert } from "./logic";

const AdditionalMaterialForm: React.FC<AdditionalMaterialFormProps> = () => {
  const {
    isLoading,
    isAlertVisible,
    response,
    methods,
    handleSubmit,
    onSubmit,
    onCloseAlert,
  } = useAlert();

  return (
    <>
      {isAlertVisible && (
        <Alert
          handleClose={onCloseAlert}
          title={response.status}
          description={response.message}
          status={response.status}
        />
      )}
      <div className="wrapperForm">
        <h2>AdditionalMaterialForm</h2>
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
            <FormTextInput
              name="unitMaterial"
              placeholder="Jednostka Materiału"
              label="Jednostka Materiału"
            />
            {/* <FormSelect
            name="unitMaterial"
            label="Jednostka Materiału"
            array={unitsMaterial}
            state={unitMaterial}
            setState={handleUnitMaterial}
          /> */}

            <div className="wrapperButton">
              <button className={`primaryBtn ${isLoading ? "loading" : ""}`}>
                {isLoading ? "Proszę czekać" : "Wyślij"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AdditionalMaterialForm;
