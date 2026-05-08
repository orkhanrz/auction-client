import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import SettingsMenu from "./settings-menu";

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onBlur={onClose}>
      <button
        className="w-9 h-9 rounded-lg cursor-pointer bg-surface-2 flex items-center justify-center border border-border"
        onClick={onToggle}
      >
        <IoSunnyOutline size={16} className="text-text-2" />
      </button>

      {isOpen && <SettingsMenu />}
    </div>
  );
}
