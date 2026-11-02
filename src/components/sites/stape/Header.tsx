import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <div className="visuals-neutral flex min-h-3xl items-center justify-between px-md py-sm lg:px-xl border-b border-[#dbd7cc]/40">
      <header className="mx-auto flex w-full max-w-[1336px] items-center justify-between">
        <div className="flex items-center gap-lg">
          <Link data-testid="main-logo" className="relative flex items-center" href="/">
            <svg
              width="112"
              height="35"
              viewBox="0 0 112 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Stape logo"
            >
              <title>Stape logo</title>
              <path
                d="M24 4L15.2432 17.6216L24 22V32H6H0V28L8.75676 14.3784L0 10V0H18H24V4Z"
                fill="#FF6D34"
              />
              <text
                x="29"
                y="27"
                fontFamily="var(--font-sans), sans-serif"
                fontWeight="500"
                fontSize="32"
                fill="var(--color-slate-900)"
              >
                Stape
              </text>
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
}
