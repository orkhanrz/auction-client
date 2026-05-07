import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  const onToggleFocus = () => {
    setIsFocused((prev) => !prev);
  };

  return (
    <div
      className={`items-center gap-4 rounded-lg p-2.5 w-full max-w-110 border border-border hidden md:flex ${isFocused ? "bg-surface-1" : "bg-surface-2"}`}
      onFocus={onToggleFocus}
      onBlur={onToggleFocus}
    >
      <LiaSearchSolid size={10} className="text-text" />
      <input
        className="text-xs w-full text-text outline-0"
        placeholder="Search auctions, sellers, categories..."
      />
    </div>
  );
}
