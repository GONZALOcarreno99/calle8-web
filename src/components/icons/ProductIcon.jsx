export default function ProductIcon({ type = "bottle", className = "" }) {
  if (type === "jar") {
    return (
      <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="17" width="24" height="21" rx="7" />
        <rect x="15" y="10" width="18" height="7" rx="2.5" />
        <line x1="12" y1="25" x2="36" y2="25" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8h8v6l4 4v20a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18l4-4Z" />
      <line x1="20" y1="8" x2="28" y2="8" />
      <line x1="16" y1="27" x2="32" y2="27" />
    </svg>
  );
}
