"use client";

import React from "react";
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
      { name: "Shopify", iconSrc: "/sites/tracking-checker/icons/Shopify.png" },
    ],
  },
  {
    label: "Analytics trackers",
    technologies: [
      { name: "Google Analytics 4", iconSrc: "/sites/tracking-checker/icons/Google_Analytics.png" },
      { name: "Universal Analytics", iconSrc: "/sites/tracking-checker/icons/Google_Universal.png" },
      { name: "Hotjar", iconSrc: "/sites/tracking-checker/icons/Hotjar.png" },
    ],
  },
  {
    label: "Advertising trackers",
    technologies: [
      { name: "Meta", iconSrc: "/sites/tracking-checker/icons/Meta.png" },
      { name: "Google Ads", iconSrc: "/sites/tracking-checker/icons/Google_Ads.png" },
      { name: "Klaviyo", iconSrc: "/sites/tracking-checker/icons/Klaviyo.png" },
      { name: "Microsoft Ads", iconSrc: "/sites/tracking-checker/icons/Microsoft.png" },
      { name: "Microsoft Clarity", iconSrc: "/sites/tracking-checker/icons/Microsoft_Clarity.png" },
    ],
  },
  {
    label: "CDN",
    technologies: [
      { name: "jsDelivr", iconSrc: "/sites/tracking-checker/icons/jsdelivr-icon.png" },
      { name: "cdnjs", iconSrc: "/sites/tracking-checker/icons/cdnjs.png" },
      { name: "Cloudflare", iconSrc: "/sites/tracking-checker/icons/CloudFlare.png" },
    ],
  },
  {
    label: "Hosting",
    technologies: [{ name: "GoDaddy", iconSrc: "/sites/tracking-checker/icons/GoDaddy.png" }],
  },
  {
    label: "Cookie Compliance",
    technologies: [{ name: "Pandectes", iconSrc: null }],
  },
  {
    label: "Payment Processors",
    technologies: [
      { name: "Visa", iconSrc: "/sites/tracking-checker/icons/Visa.png" },
      { name: "PayPal", iconSrc: "/sites/tracking-checker/icons/PayPal.png" },
      { name: "Mastercard", iconSrc: "/sites/tracking-checker/icons/Mastercard.png" },
      { name: "Google Pay", iconSrc: null },
      { name: "Apple Pay", iconSrc: null },
      { name: "Shop Pay", iconSrc: null },
      { name: "UnionPay", iconSrc: null },
    ],
  },
];

// Display all 22 detected technologies by default
const ALL_TECHNOLOGIES: Technology[] = DEFAULT_GROUPS.flatMap((group) => group.technologies);

export function DetectedTechnologies() {
  return (
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

        <span className="caption-sm text-paragraph-secondary font-mono">
          {ALL_TECHNOLOGIES.length} detected
        </span>
      </div>

      {/* All Technologies Pills Displayed by Default */}
      <div className="flex flex-wrap gap-2xs">
        {ALL_TECHNOLOGIES.map((tech) => (
          <span
            key={tech.name}
            className="flex min-w-0 items-center gap-xs rounded-full bg-[#f8f6f4] px-sm py-xs text-[14px] text-paragraph border border-[#dbd7cc]/40 hover:bg-[#eae8e2] transition-colors"
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
            <span className="min-w-0 truncate font-medium">{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
