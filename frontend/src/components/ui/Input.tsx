import React from "react";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "password" | "email";
  value?: string;
  isTextArea?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  value,
  isTextArea = false,
  isRequired = false,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 input-card">
      {label && (
        <label htmlFor={name} className="font-medium text-sm">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={4}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      )}
    </div>
  );
};

export default Input;
