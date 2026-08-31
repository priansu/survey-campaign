import React from "react";

export default function Field({ label, hint, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      {label && (
        <span className="mb-1.5 block text-[12.5px] font-medium text-ink-soft">{label}</span>
      )}
      {children}
      {hint && <span className="mt-1 block text-[11.5px] text-muted">{hint}</span>}
    </label>
  );
}
