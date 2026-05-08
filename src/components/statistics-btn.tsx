type Props = {
  title: string;
  text: string;
};

export default function StatisticsButton({ title, text }: Props) {
  return (
    <div>
      <p className="text-2xl text-text font-extrabold mb-1">{title}</p>
      <p className="text-xs text-text-3">{text}</p>
    </div>
  );
}
