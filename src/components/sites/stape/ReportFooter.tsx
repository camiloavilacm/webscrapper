import React from "react";
import Image from "next/image";

export function ReportFooter() {
  return (
    <div className="flex flex-col gap-md lg:gap-lg" data-testid="report-footer">
      {/* Orange Banner: Quick Fix */}
      <div className="visuals-orange relative mx-auto flex w-full max-w-[1336px] flex-col items-center gap-6 overflow-hidden rounded-lg px-6 py-12 lg:px-16 text-center shadow-xs">
        <Image
          src="/sites/stape/cta-primary.svg"
          alt=""
          aria-hidden="true"
          width={400}
          height={300}
          className="pointer-events-none absolute top-1/2 left-[-7.74%] -translate-y-1/2 opacity-25"
        />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="heading-2 text-white font-semibold">
            Give your tracking setup a quick fix
          </h2>
          <a
            data-testid="report-footer-button-cta"
            className="inline-flex items-center justify-center gap-xs bg-white text-[#0d0d0d] font-mono uppercase text-sm font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors shadow-md"
            href="https://stape.io/tools/setup-wizard"
            target="_blank"
            rel="noreferrer"
          >
            Try Setup Wizard
          </a>
        </div>
      </div>

      {/* Purple Banner: Partner Program */}
      <div className="visuals-medium-purple mx-auto flex w-full max-w-[1336px] flex-col gap-lg rounded-lg p-md lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-8 shadow-xs border border-tertiary">
        <div className="flex max-w-[800px] flex-col gap-xs text-heading">
          <p className="heading-3 font-semibold">Helping your clients with tracking?</p>
          <p className="paragraph-lg-regular lg:paragraph-xl text-[#0d0d0d]/80">
            Become a Stape partner and earn up to 40% recurring commissions.
          </p>
        </div>
        <a
          data-testid="report-footer-button-agency"
          className="inline-flex items-center justify-center gap-xs border border-on-action-secondary text-on-action min-w-4xl min-h-3xl py-sm px-lg button-lg-text-mono rounded-lg hover:bg-white/40 transition-colors w-full shrink-0 lg:w-auto font-medium"
          href="https://stape.io/partner-program/contact-form"
          target="_blank"
          rel="noreferrer"
        >
          Become a partner
        </a>
      </div>
    </div>
  );
}
