export default function AuctionImageBadge({
  title,
  className
}: {
  title: string;
  className?: string;
}) {
  return (
    <p
      className={`absolute text-2xs font-bold py-0.5 px-2 rounded-sm ${className}`}
    >
      {title}
    </p>
  );
}
