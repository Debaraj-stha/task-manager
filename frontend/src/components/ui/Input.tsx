import React from "react";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "password" | "email";
  value?: string;
  isTextArea?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  bgClass?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textClass?:string
  placeholderClass?:string
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
  bgClass,
  textClass="text-white",
  placeholderClass="placeholder-gray-300"
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
          className={`w-full px-4 py-3 rounded-lg ${textClass} ${placeholderClass} focus:outline-none focus:ring-2 focus:ring-blue-400 ${bgClass ? bgClass : ""}`}
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
          className={`w-full px-4 py-3 rounded-lg ${textClass} ${placeholderClass} focus:outline-none focus:ring-2 focus:ring-blue-400 ${bgClass ? bgClass : ""}`}
        />
      )}
    </div>
  );
};

export default Input;
