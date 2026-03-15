export function ScrollArea({ children }: { children: React.ReactNode }) {
  return <div className="max-h-[420px] overflow-auto">{children}</div>;
}
