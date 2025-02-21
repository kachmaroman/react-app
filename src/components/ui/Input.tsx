import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  rightElement?: React.ReactNode;
}

const Input: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
  rightElement,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-sm/6 font-medium text-black">
          {label}
        </label>
        {rightElement && <div className="text-sm">{rightElement}</div>}
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 sm:text-sm"
          
        />
      </div>
    </div>
  );
};

export default Input;
