interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
  multiline?: boolean;
  rows?: number;
}

export function Input({ id, name, type = 'text', placeholder, required, autocomplete, multiline, rows }: InputProps) {
  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        class="form-input form-textarea"
        placeholder={placeholder}
        rows={rows ?? 5}
        required={required}
        aria-required={required}
      />
    );
  }
  return (
    <input
      id={id}
      name={name}
      type={type}
      class="form-input"
      placeholder={placeholder}
      required={required}
      autocomplete={autocomplete}
      aria-required={required}
    />
  );
}
