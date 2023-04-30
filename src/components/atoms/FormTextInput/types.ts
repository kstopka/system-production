export type StatusType = "success" | "error" | "default";

export interface FormTextInputProps {
  name: string;
  placeholder: string;
  label?: string;
  isDisabled?: boolean;
}
