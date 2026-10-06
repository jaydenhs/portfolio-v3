import React from "react"

// Up-right arrow shared by the Play cards and Write links
export const Arrow = ({ className, size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

// On hover of an ancestor with the `group` class, the arrow exits to the top right
// while a copy enters from the bottom left
const ease = "ease-[cubic-bezier(0.43,0.13,0.23,0.96)]"

export const SlidingArrow = ({ size = 14 }) => (
  <span
    aria-hidden="true"
    className="relative flex shrink-0 items-center justify-center overflow-hidden"
    style={{ width: size, height: size, "--slide": `${size}px` }}
  >
    <Arrow
      size={size}
      className={`transition-transform duration-500 ${ease} group-hover:translate-x-[var(--slide)] group-hover:-translate-y-[var(--slide)]`}
    />
    <Arrow
      size={size}
      className={`absolute -translate-x-[var(--slide)] translate-y-[var(--slide)] transition-transform duration-500 ${ease} group-hover:translate-x-0 group-hover:translate-y-0`}
    />
  </span>
)
