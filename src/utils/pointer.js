// WebKit (iOS Safari and anything built on it) fires a synthetic
// pointerenter with pointerType "mouse" ~300ms after a tap, for :hover
// compatibility — with no real pointer, no leave event ever follows, so
// filtering on pointerType alone still leaves hover-only effects stuck on
// after a tap. `(hover: hover) and (pointer: fine)` reflects the primary
// input's real capability and isn't fooled by that synthetic event,
// unlike pointerType.
export const supportsHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
