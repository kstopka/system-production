import React from "react";

import { AppProvider, WindowProvider } from "./contexted";

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextsWrapperProps {
  element: React.ReactNode;
}

const InnerProviders: React.FC<ProviderProps> = ({ children }) => {
  return <>{children}</>;
};

const OuterProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <WindowProvider>
      <AppProvider>{children}</AppProvider>
    </WindowProvider>
  );
};

const ContextsWrapper: React.FC<ContextsWrapperProps> = ({
  element,
}): JSX.Element => (
  <OuterProviders>
    <InnerProviders>{element}</InnerProviders>
  </OuterProviders>
);

export default ContextsWrapper;
