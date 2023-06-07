import React, { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import Alert from "../atoms/Alert";
import FormTextInput from "../atoms/FormTextInput";
import { useLogin } from "./logic";
import "./style.css";

const LoginForm: React.FC = (): JSX.Element => {
  const {
    isLoading,
    isAlertVisible,
    response,
    methods,
    onSubmit,
    onCloseAlert,
  } = useLogin();
  const { handleSubmit } = methods;

  const login = ({ key }: KeyboardEvent) => {
    if (key === "1") onSubmit({ email: "Janek", password: "qwe" });
    if (key === "2") onSubmit({ email: "Marysia", password: "qwe" });
    if (key === "3") onSubmit({ email: "Karol", password: "qwe" });
  };

  useEffect(() => {
    window.addEventListener("keydown", login);

    return () => {
      window.removeEventListener("keydown", login);
    };
  }, []);

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

      <div className="LoginWrapper">
        <h2>Zaloguj się</h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <FormTextInput name="email" label="E-mail" placeholder="E-mail" />
            <FormTextInput
              type="password"
              name="password"
              label="Hasło"
              placeholder="Hasło"
            />
            <button
              type="submit"
              className={`primaryBtn ${isLoading ? "loading" : ""}`}
            >
              {isLoading ? "Proszę czekać" : "Zaloguj się"}
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default LoginForm;
