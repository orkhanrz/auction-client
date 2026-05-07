import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";

export default function ToggleButton() {
  const { toggle } = useTheme();
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    toggle();
    setIsToggled((prev) => !prev);
  };

  return (
    <div
      className="bg-surface-2 w-10 p-0.5 rounded-full cursor-pointer border border-border-2"
      onClick={onToggle}
    >
      <div
        className={`bg-text w-4 h-4 rounded-full transition-all duration-200 ${isToggled ? "translate-x-4.5" : ""}`}
      ></div>
    </div>
  );
}
