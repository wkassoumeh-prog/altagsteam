type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="group rounded-2xl border border-border bg-white px-6 py-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
