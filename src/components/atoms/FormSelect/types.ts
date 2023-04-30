export interface FormSelectProps {
  name: string;
  label?: string;
  array: {
    name: string;
    code: string;
  }[];
  state: string;
  setState: (value: string) => void;
}
