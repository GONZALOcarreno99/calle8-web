export default function ServiceIcon({ type = "scissors", className = "" }) {
  if (type === "diamond") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9Z" />
        <path d="M2 9h20" />
        <path d="M9 3 12 9l-2 12" />
        <path d="M15 3 12 9l2 12" />
      </svg>
    );
  }

  if (type === "crown") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18" />
        <path d="M4 18 3 8l5 4 4-7 4 7 5-4-1 10Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 7.5 20 19" />
      <path d="M8.5 16.5 20 5" />
    </svg>
  );
}
