export interface FormSelectProps {
  name: string;
  label?: string;
  array: {
    name: string;
    code: string | number;
  }[];
  state: string | number;
  setState: (value: string | number) => void;
}
