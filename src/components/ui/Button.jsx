/**
 * Shared button styles and theme-aware variants live in index.css.
 */
export default function Button({
  as = 'a',
  variant = 'primary',
  href,
  onClick,
  type,
  children,
  className = '',
  ...rest
}) {
  const Comp = as

  return (
    <Comp
      href={href}
      onClick={onClick}
      type={type}
      className={`btn-chunky btn-${variant} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}
