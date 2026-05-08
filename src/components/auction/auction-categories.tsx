import { useState } from "react";
import AuctionCategory from "./auction-category";

type Category = {
  id: number;
  name: string;
  isSelected?: boolean;
};

export default function AuctionCategories({
  categories
}: {
  categories: Category[];
}) {
  const [selectedId, setSelectedId] = useState(1);

  const onSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {categories.map((category) => (
        <AuctionCategory
          key={category.id}
          id={category.id}
          title={category.name}
          isSelected={category.id === selectedId}
          onSelect={() => onSelect(category.id)}
        />
      ))}
    </div>
  );
}
