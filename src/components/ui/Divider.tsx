export function Divider({ className }: { className?: string }) {
  return <hr className={className ?? "border-0 border-t border-border"} />;
}
