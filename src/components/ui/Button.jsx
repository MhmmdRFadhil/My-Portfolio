/**
 * Tombol "chunky": bg solid + shadow di bagian bawah saja (bukan
 * diagonal kanan-bawah), warna shadow mengikuti varian tombol
 * (bukan hitam). Style diatur lewat class .btn-chunky di index.css
 * supaya warna shadow per-varian gampang diatur lewat CSS variable.
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
