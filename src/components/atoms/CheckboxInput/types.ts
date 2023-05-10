export interface CheckboxProps {
  name: string;
  checked: boolean;
  handleToggle: () => void;
  disabled?: boolean;
  error?: boolean;
  title?: string;
  description?: string;
}
