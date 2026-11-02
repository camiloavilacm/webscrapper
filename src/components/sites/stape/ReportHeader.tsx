import React from "react";
import Image from "next/image";

interface ReportHeaderProps {
  domain?: string;
  scanDate?: string;
  scanDateShort?: string;
}

export function ReportHeader({
  domain = "theecowoman.es",
  scanDate = "30 October 2026 01:55 UTC",
  scanDateShort = "30 Oct 2026 01:55 UTC",
}: ReportHeaderProps) {
  return (
    <header className="flex w-full flex-col gap-md xl:flex-row xl:items-end">
      <div className="flex min-w-px flex-1 items-center gap-md">
        {/* Screenshot preview */}
        <div className="relative h-[80px] w-[126px] shrink-0 overflow-hidden rounded-lg border border-tertiary xl:h-[115px] xl:w-[180px] bg-neutral-200">
          <Image
            src="/sites/stape/screenshot.png"
            alt={`Screenshot of ${domain}`}
            fill
            priority
            sizes="(min-width: 1280px) 180px, 126px"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex min-w-px flex-1 flex-col gap-md">
          <div className="flex min-w-px flex-wrap items-center gap-xs">
            <span
              data-slot="badge"
              className="inline-flex items-center gap-2xs px-2xs py-3xs rounded-sm caption-sm whitespace-nowrap text-heading bg-neutral-100 border border-ghost"
            >
              Website Tracking Report
            </span>
            <span
              data-slot="badge"
              className="inline-flex items-center gap-2xs px-2xs py-3xs rounded-sm caption-sm whitespace-nowrap text-heading bg-neutral-100 border border-ghost min-w-px"
            >
              <span className="hidden min-w-px truncate xl:inline">Scanned: {scanDate}</span>
              <span className="min-w-px truncate xl:hidden">Scanned: {scanDateShort}</span>
            </span>
          </div>

          <div className="hidden min-w-px xl:block">
            <div className="flex min-w-px flex-col gap-3xs">
              <div className="flex min-w-px items-center gap-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  className="size-2xl shrink-0 text-[#0d0d0d]"
                >
                  <path
                    d="M25 43.75C33.7345 43.75 41.0741 37.7775 43.1577 29.6936M25 43.75C16.2655 43.75 8.92587 37.7775 6.84229 29.6936M25 43.75C30.1777 43.75 34.375 35.3553 34.375 25C34.375 14.6447 30.1777 6.25 25 6.25M25 43.75C19.8223 43.75 15.625 35.3553 15.625 25C15.625 14.6447 19.8223 6.25 25 6.25M43.1577 29.6936C43.5443 28.1936 43.75 26.6208 43.75 25C43.75 21.6555 42.8743 18.5155 41.3397 15.7968C38.1229 10.0978 32.0108 6.25 25 6.25M6.84229 29.6936C6.45565 28.1936 6.25 26.6208 6.25 25C6.25 21.6555 7.12568 18.5155 8.66026 15.7968C11.8771 10.0978 17.9892 6.25 25 6.25M41.3397 15.7968C36.9578 19.5841 31.2464 21.875 25 21.875C18.7536 21.875 13.0422 19.5841 8.66026 15.7968M43.1577 29.6936C37.7779 32.6765 31.5873 34.375 25 34.375C18.4127 34.375 12.2221 32.6765 6.84229 29.6936"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p title={domain} className="heading-3 min-w-px flex-1 truncate text-heading">
                  {domain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile domain view */}
      <div className="min-w-px xl:hidden">
        <div className="flex min-w-px items-center gap-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 50 50"
            fill="none"
            className="size-7 shrink-0 text-[#0d0d0d]"
          >
            <path
              d="M25 43.75C33.7345 43.75 41.0741 37.7775 43.1577 29.6936M25 43.75C16.2655 43.75 8.92587 37.7775 6.84229 29.6936M25 43.75C30.1777 43.75 34.375 35.3553 34.375 25C34.375 14.6447 30.1777 6.25 25 6.25M25 43.75C19.8223 43.75 15.625 35.3553 15.625 25C15.625 14.6447 19.8223 6.25 25 6.25M43.1577 29.6936C43.5443 28.1936 43.75 26.6208 43.75 25C43.75 21.6555 42.8743 18.5155 41.3397 15.7968C38.1229 10.0978 32.0108 6.25 25 6.25M6.84229 29.6936C6.45565 28.1936 6.25 26.6208 6.25 25C6.25 21.6555 7.12568 18.5155 8.66026 15.7968C11.8771 10.0978 17.9892 6.25 25 6.25M41.3397 15.7968C36.9578 19.5841 31.2464 21.875 25 21.875C18.7536 21.875 13.0422 19.5841 8.66026 15.7968M43.1577 29.6936C37.7779 32.6765 31.5873 34.375 25 34.375C18.4127 34.375 12.2221 32.6765 6.84229 29.6936"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p title={domain} className="heading-5 min-w-px flex-1 truncate text-heading">
            {domain}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-xs xl:hidden">
        <a
          data-testid="report-header-button-run-scan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-xs border border-on-action-secondary text-on-action min-h-xl py-xs px-sm button-sm-text-mono rounded-md hover:bg-[#eae8e2] transition-colors w-full"
          href="https://stape.io/website-tracking-checker"
        >
          Run new scan
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="hidden gap-xs xl:flex">
        <a
          data-testid="report-header-button-run-scan-desktop"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-xs border border-on-action-secondary text-on-action min-w-4xl min-h-3xl py-sm px-lg button-lg-text-mono rounded-lg hover:bg-[#eae8e2] transition-colors"
          href="https://stape.io/website-tracking-checker"
        >
          Run new scan
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
