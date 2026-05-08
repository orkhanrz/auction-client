type Props = {
  columnTitle: string;
  className?: string;
  links: { name: string; href: string }[];
};

export default function FooterColumn({ columnTitle, className, links }: Props) {
  return (
    <div className={className}>
      <h3 className="text-xs text-text uppercase font-semibold mb-4">
        {columnTitle}
      </h3>

      <ul>
        {links.map((link, index) => (
          <li key={index} className="text-sm text-text-3 cursor-pointer mb-2">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
