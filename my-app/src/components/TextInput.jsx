import React, { useState } from 'react';

const TextInput = ({ label, type = 'text', placeholder, value, onChange, required = false, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <div 
        className={`absolute -top-2.5 left-3 px-1 text-[13px] font-medium bg-popx-bg z-10 transition-colors ${
          isFocused ? 'text-popx-primary' : 'text-popx-primary'
        }`}
      >
        {label}{required && <span className="text-red-500">*</span>}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-popx-bg border ${
          isFocused ? 'border-popx-primary' : 'border-popx-border'
        } rounded-md px-4 py-3 text-[15px] text-popx-text placeholder-popx-muted outline-none transition-colors transition-colors`}
      />
    </div>
  );
};

export default TextInput;
