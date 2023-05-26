import React from "react";
import { FormProvider } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import { useLogin } from "./logic";
import "./style.css";

const LoginForm: React.FC = (): JSX.Element => {
  const { isLoading, methods, onSubmit } = useLogin();
  const { handleSubmit } = methods;

  return (
    <div className="Login">
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
  );
};

export default LoginForm;
