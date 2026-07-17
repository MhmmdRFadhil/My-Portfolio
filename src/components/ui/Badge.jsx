export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`font-mono text-[11.5px] bg-surfaceAlt text-muted px-2.5 py-1 rounded-lg border-2 border-line ${className}`}
    >
      {children}
    </span>
  )
}
