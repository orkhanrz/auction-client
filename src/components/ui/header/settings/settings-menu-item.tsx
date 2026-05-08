type Props = {
  icon: React.ReactNode;
  label: string;
  textClass?: string;
  iconClass?: string;
};

export default function SettingsMenuItem({ icon, label, textClass }: Props) {
  return (
    <li>
      <button className="flex items-center gap-2 px-2 py-4 w-full rounded-md cursor-pointer hover:bg-surface-2">
        {icon}
        <p className={`text-sm ${textClass || "text-text-2"}`}>{label}</p>
      </button>
    </li>
  );
}
