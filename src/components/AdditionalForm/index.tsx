import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, schema } from "./utils";
import FormTextInput from "../atoms/FormTextInput";

const AdditionalForm = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <FormProvider {...methods}>
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
      </FormProvider>
    </div>
  );
};

export default AdditionalForm;
