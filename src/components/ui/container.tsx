export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-310 mx-auto px-8">{children}</div>;
}
