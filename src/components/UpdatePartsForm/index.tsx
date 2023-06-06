/* eslint-disable react-hooks/exhaustive-deps */
import { FormProvider } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import FormSelect from "../atoms/FormSelect";
import "./style.css";
import { useAdditionalParts } from "./logic";
import Alert from "../atoms/Alert";
import { IPart } from "../../contexted/App/types";

interface UpdatePartsFormProps {
  singlePart: IPart;
}

const UpdatePartsForm: React.FC<UpdatePartsFormProps> = ({
  singlePart,
}): JSX.Element => {
  const {
    isLoading,
    isAlertVisible,
    response,
    methods,
    materialsParts,
    materialParts,
    handleMaterialParts,
    handleSubmit,
    onSubmit,
    onCloseAlert,
  } = useAdditionalParts(singlePart);

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
        <h2>Edytowanie części</h2>
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
            <FormSelect
              name="materialParts"
              label="Materiał Części"
              array={materialsParts}
              state={materialParts}
              setState={handleMaterialParts}
            />
            <FormTextInput
              name="quintityMagazinParts"
              placeholder="Ilość Magazynowa"
              label="Ilość Magazynowa"
            />
            <FormTextInput
              name="quantityOrderParts"
              placeholder="Ilość Zamówień"
              label="Ilość Zamówień"
            />
            <FormTextInput
              name="quantityOccupiedParts"
              placeholder="Ilość Zajętych"
              label="Ilość Zajętych"
            />

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

export default UpdatePartsForm;
