import React from "react";

export function SubSection({ title, children }) {
  return (
    <div className="rounded-xl border border-line bg-paper/60 p-4">
      {title && (
        <h4 className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-pine">
          {title}
        </h4>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Grid2({ children }) {
  return <div className="grid grid-cols-2 gap-3">{children}</div>;
}

export function Grid3({ children }) {
  return <div className="grid grid-cols-3 gap-3">{children}</div>;
}
