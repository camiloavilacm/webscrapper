"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InfoDialog } from "./InfoDialog";

interface Technology {
  name: string;
  iconSrc?: string | null;
}

interface TechnologyGroup {
  label: string;
  technologies: Technology[];
}

const DEFAULT_GROUPS: TechnologyGroup[] = [
  {
    label: "Ecommerce",
    technologies: [
      { name: "Cart Functionality", iconSrc: null },
      { name: "Shopify", iconSrc: "/sites/stape/icons/Shopify.png" },
    ],
  },
  {
    label: "Analytics trackers",
    technologies: [
      { name: "Google Analytics 4", iconSrc: "/sites/stape/icons/Google_Analytics.png" },
      { name: "Universal Analytics", iconSrc: "/sites/stape/icons/Google_Universal.png" },
      { name: "Hotjar", iconSrc: "/sites/stape/icons/Hotjar.png" },
    ],
  },
  {
    label: "Advertising trackers",
    technologies: [
      { name: "Meta", iconSrc: "/sites/stape/icons/Meta.png" },
      { name: "Google Ads", iconSrc: "/sites/stape/icons/Google_Ads.png" },
      { name: "Klaviyo", iconSrc: "/sites/stape/icons/Klaviyo.png" },
      { name: "Microsoft Ads", iconSrc: "/sites/stape/icons/Microsoft.png" },
      { name: "Microsoft Clarity", iconSrc: "/sites/stape/icons/Microsoft_Clarity.png" },
    ],
  },
  {
    label: "CDN",
    technologies: [
      { name: "jsDelivr", iconSrc: "/sites/stape/icons/jsdelivr-icon.png" },
      { name: "cdnjs", iconSrc: "/sites/stape/icons/cdnjs.png" },
      { name: "Cloudflare", iconSrc: "/sites/stape/icons/CloudFlare.png" },
    ],
  },
  {
    label: "Hosting",
    technologies: [{ name: "GoDaddy", iconSrc: "/sites/stape/icons/GoDaddy.png" }],
  },
  {
    label: "Cookie Compliance",
    technologies: [{ name: "Pandectes", iconSrc: null }],
  },
  {
    label: "Payment Processors",
    technologies: [
      { name: "Visa", iconSrc: "/sites/stape/icons/Visa.png" },
      { name: "PayPal", iconSrc: "/sites/stape/icons/PayPal.png" },
      { name: "Mastercard", iconSrc: "/sites/stape/icons/Mastercard.png" },
      { name: "Google Pay", iconSrc: null },
      { name: "Apple Pay", iconSrc: null },
      { name: "Shop Pay", iconSrc: null },
      { name: "UnionPay", iconSrc: null },
    ],
  },
];

const PREVIEW_TECHS: Technology[] = [
  { name: "Cart Functionality", iconSrc: null },
  { name: "Shopify", iconSrc: "/sites/stape/icons/Shopify.png" },
  { name: "Google Analytics 4", iconSrc: "/sites/stape/icons/Google_Analytics.png" },
  { name: "Universal Analytics", iconSrc: "/sites/stape/icons/Google_Universal.png" },
  { name: "Hotjar", iconSrc: "/sites/stape/icons/Hotjar.png" },
  { name: "Meta", iconSrc: "/sites/stape/icons/Meta.png" },
  { name: "Google Ads", iconSrc: "/sites/stape/icons/Google_Ads.png" },
  { name: "Klaviyo", iconSrc: "/sites/stape/icons/Klaviyo.png" },
  { name: "Microsoft Ads", iconSrc: "/sites/stape/icons/Microsoft.png" },
];

export function DetectedTechnologies() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between gap-md rounded-lg bg-primary p-md lg:p-lg border border-tertiary shadow-xs">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-md">
          <div className="flex items-center gap-xs">
            <p className="heading-4 text-paragraph">Detected technologies</p>
            <InfoDialog
              title="Detected technologies"
              description={`Detected technologies show which tools, platforms, and services were found on your website.\n\nThis includes analytics and advertising trackers, CDNs, CMSs, CRMs, front-end frameworks, e-commerce platforms, and other technologies that may affect tracking, attribution, data quality, and page performance.`}
              dataTestId="detected-technologies-button-info"
            />
          </div>

          <div className="hidden shrink-0 lg:block">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-xs border border-on-action-secondary text-on-action min-h-xl py-xs px-sm button-sm-text-mono rounded-md hover:bg-[#eae8e2] transition-colors cursor-pointer"
              data-testid="detected-technologies-button-view-all-desktop"
              type="button"
            >
              View all
            </button>
          </div>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2xs">
          {PREVIEW_TECHS.map((tech) => (
            <span
              key={tech.name}
              className="flex min-w-0 items-center gap-xs rounded-full bg-[#f8f6f4] px-sm py-xs text-[15px] text-paragraph border border-[#dbd7cc]/40"
            >
              {tech.iconSrc && (
                <Image
                  src={tech.iconSrc}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="size-[20px] shrink-0 object-contain"
                />
              )}
              <span className="min-w-0 truncate">{tech.name}</span>
            </span>
          ))}

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            data-testid="detected-technologies-button-show-more"
            className="flex min-w-0 items-center justify-center rounded-full bg-[#f8f6f4] px-sm py-xs text-[15px] font-medium text-paragraph hover:bg-[#eae8e2] transition-colors border border-[#dbd7cc]/40 cursor-pointer"
          >
            +13
          </button>
        </div>

        {/* Mobile View All Button */}
        <div className="block lg:hidden pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-xs border border-on-action-secondary text-on-action min-h-xl py-xs px-sm button-sm-text-mono rounded-md hover:bg-[#eae8e2] transition-colors cursor-pointer"
            data-testid="detected-technologies-button-view-all-mobile"
            type="button"
          >
            View all
          </button>
        </div>
      </div>

      {/* Modal Dialog for View All */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-150 border border-[#e0e3e6]"
            role="dialog"
            aria-modal="true"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between pb-4 bg-white border-b border-[#e0e3e6]">
              <h3 className="heading-4 text-heading">Detected technologies</h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1 text-[#686968] hover:bg-[#f1f3f4] hover:text-[#0d0d0d] transition-colors"
                aria-label="Close dialog"
              >
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-lg">
              {DEFAULT_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col items-start gap-xs">
                  <p className="heading-6 text-paragraph font-medium">{group.label}</p>
                  <div className="flex w-full flex-wrap gap-2xs">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="flex min-w-0 items-center gap-xs rounded-full bg-[#f8f6f4] px-sm py-xs text-[14px] text-paragraph border border-[#dbd7cc]/40"
                      >
                        {tech.iconSrc && (
                          <Image
                            src={tech.iconSrc}
                            alt={tech.name}
                            width={18}
                            height={18}
                            className="size-[18px] shrink-0 object-contain"
                          />
                        )}
                        <span className="min-w-0 truncate">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end pt-4 border-t border-[#e0e3e6]">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-[#0d0d0d] text-white rounded-md text-sm font-medium hover:bg-[#1e1f1e] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
