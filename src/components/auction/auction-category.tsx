export default function AuctionCategory({
  id,
  title,
  isSelected,
  onSelect
}: {
  id: number;
  title: string;
  isSelected?: boolean;
  onSelect: (id: number) => void;
}) {
  return (
    <button
      className={`rounded-full text-xs font-bold border py-1 px-4 cursor-pointer ${
        isSelected ? "bg-accent text-accent-inv" : "text-text-2 border-border"
      }`}
      onClick={() => onSelect(id)}
    >
      {title}
    </button>
  );
}
