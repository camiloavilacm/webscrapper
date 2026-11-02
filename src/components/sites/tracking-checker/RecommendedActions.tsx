"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScriptItem {
  order: number;
  name: string;
  icon: string;
  provider: string;
  dataSentTo: string;
  categories: string[];
  transferSize: number;
  blockingTime: number;
}

interface PageSpeedData {
  pageSpeedUrl: string;
  overallRank: string;
  inpMs: number;
  lcpSeconds: number;
  clsScore: number;
  fcpSeconds: number;
  ttfbSeconds: number;
}

interface HowToPost {
  slug: string;
  title: string;
  language: string;
  type: string;
}

interface RecommendationAction {
  id: string;
  title: string;
  description: string;
  scorePercent: number;
  isCritical: boolean;
  categories: string[];
  howToVideo?: string | null;
  howToTitle?: string | null;
  howToPost?: HowToPost | null;
  pageSpeed?: PageSpeedData | null;
  scripts?: ScriptItem[];
}

const RECOMMENDATIONS: RecommendationAction[] = [
  {
    id: "rec-cookie-keeper",
    title: "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
    description:
      "With ITP, even cookies set from a first-party domain can be restricted. We've detected that you're not bypassing these cookie lifespan limits. Configure Cookie Keeper power-up to overcome ITP restrictions for your Shopify store.",
    scorePercent: 19,
    isCritical: true,
    categories: ["Cookies"],
    howToVideo: "https://www.youtube.com/watch?v=n-CtX-uieTQ",
    howToTitle: "Learn how to increase first-party cookie lifetime set by a third-party IP",
    howToPost: {
      slug: "safari-itp",
      title: "Safari ITP - everything you need to know",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-ga4",
    title: "Implement Google Analytics 4 server-side tracking",
    description:
      "We’ve detected a client-side Google Analytics 4 script. While this setup works, client-side tracking is more vulnerable to ad blockers, cookie restrictions, and browser privacy settings issues, which can negatively impact the accuracy and reliability of your data. Switching to server-side tracking will help to bypass these challenges.",
    scorePercent: 16,
    isCritical: true,
    categories: ["Analytics"],
    howToVideo: "https://www.youtube.com/watch?v=z5jfbSB_-Ss",
    howToTitle: "Learn how to implement Google Analytics 4 server-side tracking",
    howToPost: {
      slug: "set-up-ga4-server-side-tracking",
      title: "How to set up GA4 server-side tracking",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-adblock",
    title: "Avoid negative impact of ad blockers",
    description:
      "It has been detected that your GTM container is loading without proper protection against ad blockers. Ad blockers can interfere with tracking, leading to inaccurate data and incomplete insights. By using Custom Loader, you can ensure reliability and make better data-driven decisions for your business.",
    scorePercent: 12,
    isCritical: false,
    categories: ["Advertising", "Analytics"],
    howToVideo: "https://www.youtube.com/watch?v=sTKjNo3mR4E",
    howToTitle: "Learn how to avoid the harmful impact of ad blockers on tracking code",
    howToPost: {
      slug: "bypass-adblock-detection",
      title: "Avoid the harmful impact of ad blockers on your website tracking code",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-meta",
    title: "Switch to web & server-side tracking for Meta",
    description:
      "We’ve detected that you're using client-side tracking for Meta. But Meta recommends a hybrid tracking method — combining both web and server-side tracking. Adding server-side tracking ensures you follow best practices and optimize data accuracy and functionality.",
    scorePercent: 8,
    isCritical: false,
    categories: ["Advertising"],
    howToVideo: "https://www.youtube.com/watch?v=ytNnSVodsA4",
    howToTitle: "Learn how to correctly implement Meta tracking",
    howToPost: {
      slug: "how-to-set-up-facebook-conversion-api",
      title: "Set up Facebook server-side tracking with Facebook Conversions API",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-ua",
    title: "Remove Universal Analytics script",
    description:
      "We’ve detected that Universal Analytics is still active, but UA was disabled in July 2023. It continues to load unnecessary scripts and data dumps, which can slow down your website. We recommend removing Universal Analytics and migrating to GA4 for better performance and tracking.",
    scorePercent: 8,
    isCritical: false,
    categories: ["Advertising"],
    howToVideo: "https://www.youtube.com/watch?v=z5jfbSB_-Ss",
    howToTitle: "Learn how to set up GA4 tracking using Google Tag Manager server-side container",
    howToPost: {
      slug: "set-up-ga4-server-side-tracking",
      title: "How to set up GA4 server-side tracking",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-gads",
    title: "Move to Google Ads server-side tracking",
    description:
      "We’ve detected a client-side Google Ads script. While this setup works, client-side tracking is more vulnerable to ad blockers, cookie restrictions, and browser privacy settings issues, which can negatively impact the accuracy and reliability of your data. Switching to server-side tracking will help to bypass these challenges.",
    scorePercent: 6,
    isCritical: false,
    categories: ["Advertising"],
    howToVideo: "https://www.youtube.com/watch?v=s-R6mvpiLk4",
    howToTitle: "Learn how to implement Google Ads server-side tracking",
    howToPost: {
      slug: "server-side-conversion-tracking-in-google-ads-adwords",
      title: "Google Ads server-side tracking guide",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-pagespeed",
    title: "Optimise page speed",
    description:
      "Tracking scripts load JavaScript in the browser which can increase First Contentful Paint, Largest Contentful Paint, and Total Blocking Time. Offloading trackers to a server-side container improves your Core Web Vitals and user experience.",
    scorePercent: 5,
    isCritical: false,
    categories: ["Pagespeed"],
    pageSpeed: {
      pageSpeedUrl:
        "https://pagespeed.web.dev/analysis?form_factor=mobile&url=https%3A%2F%2Ftheecowoman.es%2F",
      overallRank: "AVERAGE",
      inpMs: 290,
      lcpSeconds: 2.3,
      clsScore: 0.1,
      fcpSeconds: 1.6,
      ttfbSeconds: 0.5,
    },
    scripts: [
      {
        order: 1,
        name: "fbevents.js",
        icon: "/sites/tracking-checker/icons/Meta.png",
        provider: "Meta",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 115,
        blockingTime: 92,
      },
      {
        order: 2,
        name: "G gtag.js",
        icon: "/sites/tracking-checker/icons/Google_Analytics.png",
        provider: "Google",
        dataSentTo: "US",
        categories: ["Analytics"],
        transferSize: 199,
        blockingTime: 536,
      },
      {
        order: 3,
        name: "AW gtag.js",
        icon: "/sites/tracking-checker/icons/Google_Ads.png",
        provider: "Google",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 169,
        blockingTime: 545,
      },
      {
        order: 4,
        name: "onsite.js",
        icon: "/sites/tracking-checker/icons/Klaviyo.png",
        provider: "Klaviyo",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 34,
        blockingTime: 488,
      },
      {
        order: 5,
        name: "klaviyo.js",
        icon: "/sites/tracking-checker/icons/Klaviyo.png",
        provider: "Klaviyo",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 4,
        blockingTime: 621,
      },
      {
        order: 6,
        name: "fender_analytics.js",
        icon: "/sites/tracking-checker/icons/Klaviyo.png",
        provider: "Klaviyo",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 15,
        blockingTime: 47,
      },
      {
        order: 7,
        name: "static.js",
        icon: "/sites/tracking-checker/icons/Klaviyo.png",
        provider: "Klaviyo",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 1,
        blockingTime: 46,
      },
      {
        order: 8,
        name: "runtime.js",
        icon: "/sites/tracking-checker/icons/Klaviyo.png",
        provider: "Klaviyo",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 8,
        blockingTime: 52,
      },
      {
        order: 9,
        name: "analytics.js",
        icon: "/sites/tracking-checker/icons/Google_Universal.png",
        provider: "Google",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 21,
        blockingTime: 35,
      },
      {
        order: 10,
        name: "bat.js",
        icon: "/sites/tracking-checker/icons/Microsoft.png",
        provider: "Microsoft",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 17,
        blockingTime: 101,
      },
      {
        order: 11,
        name: "clarity.js",
        icon: "/sites/tracking-checker/icons/Microsoft_Clarity.png",
        provider: "Microsoft",
        dataSentTo: "US",
        categories: ["Advertising"],
        transferSize: 1,
        blockingTime: 390,
      },
      {
        order: 12,
        name: "hotjar.js",
        icon: "/sites/tracking-checker/icons/Hotjar.png",
        provider: "Hotjar",
        dataSentTo: "MT",
        categories: ["Analytics"],
        transferSize: 7,
        blockingTime: 141,
      },
    ],
  },
  {
    id: "rec-msads",
    title: "Switch to hybrid tracking for Microsoft Ads",
    description:
      "We’ve detected that you’re using client-side tracking for Microsoft. Microsoft recommends combining browser and server-side tracking using the Microsoft Conversion API (CAPI). Enabling server-side tracking helps improve data accuracy, match rates, and overall tracking reliability.",
    scorePercent: 4,
    isCritical: false,
    categories: ["Advertising"],
    howToTitle: "Learn how to implement Microsoft CAPI tracking",
    howToPost: {
      slug: "guide-microsoft-conversion-api-integration",
      title: "Step-by-step guide on Microsoft Conversion API integration",
      language: "en",
      type: "blog",
    },
  },
  {
    id: "rec-klaviyo",
    title: "Set up server-side tracking for Klaviyo",
    description:
      "We’ve detected that you’re using client-side tracking for Klaviyo, but the platform also supports server-side tracking. Setting up server-side tracking is highly recommended for better performance.",
    scorePercent: 3,
    isCritical: false,
    categories: ["Advertising"],
    howToVideo: "https://www.youtube.com/watch?v=t5fqMfJs3K8&t=2s",
    howToTitle: "Learn how to configure Klaviyo tracking",
    howToPost: {
      slug: "integrate-klaviyo-with-your-website-using-google-tag-manager-server-container",
      title: "Integrate Klaviyo with your website using Google Tag Manager Server container",
      language: "en",
      type: "blog",
    },
  },
];

export function RecommendedActions() {
  const [showFullSummary, setShowFullSummary] = useState(false);
  const [openCardId, setOpenCardId] = useState<string | null>("rec-cookie-keeper");

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="flex flex-col gap-lg rounded-lg bg-primary px-md py-lg lg:px-lg xl:grid xl:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)] border border-tertiary shadow-xs"
      data-testid="recommended-actions"
    >
      {/* Left Sidebar / Heading */}
      <div>
        <div className="hidden xl:flex xl:flex-col xl:gap-md sticky top-6">
          <p className="heading-4 text-heading">Recommended actions</p>
          <span className="heading-0 text-heading font-medium">9</span>
        </div>
        <div className="flex items-center gap-xs xl:hidden pb-2">
          <span className="heading-4 text-heading font-semibold">9</span>
          <p className="heading-4 text-heading">Recommended actions</p>
        </div>
      </div>

      {/* Right Column: Summary + Cards */}
      <div className="flex flex-col gap-lg">
        {/* Summary Card */}
        <div className="flex flex-col gap-sm rounded-lg bg-[#f8f6f4] p-md border border-[#dbd7cc]/40">
          <p className="text-[15px] leading-relaxed text-[#4b4c4b]">
            Your website&apos;s tracking setup currently has a very low overall score of 16, indicating
            significant areas for improvement. All detected tracking, including for key platforms like Google
            Analytics 4, Meta, and Google Ads, is primarily client-side.
          </p>
          {showFullSummary && (
            <p className="text-[15px] leading-relaxed text-[#4b4c4b] animate-in fade-in duration-200">
              Currently, all your tracking operates client-side, making it vulnerable to ad blockers, browser
              privacy settings, and cookie restrictions, which leads to substantial data loss, attribution
              gaps, and under-reporting of user actions. Transitioning to server-side tracking for platforms that
              support it, such as Google Analytics 4, Meta, and Google Ads, would significantly improve data
              accuracy, ensure more reliable attribution for your marketing campaigns, and provide a more
              complete picture of customer journeys, enabling faster and more informed business decisions.
              This shift is crucial for maintaining robust data collection in today&apos;s evolving digital
              landscape. Below you can find all the recommendations for your tracking and ways to improve it.
            </p>
          )}
          <button
            type="button"
            onClick={() => setShowFullSummary(!showFullSummary)}
            data-testid="recommended-actions-summary-show-more"
            className="text-[14px] font-mono font-medium text-[#0d0d0d] underline hover:no-underline self-start cursor-pointer mt-1"
          >
            {showFullSummary ? "Show less" : "Show more"}
          </button>
        </div>

        {/* 9 Recommendation Cards */}
        <div className="flex flex-col gap-4">
          {RECOMMENDATIONS.map((rec) => {
            const isOpen = openCardId === rec.id;

            return (
              <article
                key={rec.id}
                id={rec.id}
                className={`flex flex-col rounded-lg border transition-all ${
                  isOpen
                    ? "border-[#0d0d0d] bg-[#f8f6f4] shadow-sm"
                    : "border-tertiary bg-white hover:bg-[#faf9f8]"
                }`}
                data-testid="recommendation-card"
                data-state={isOpen ? "open" : "closed"}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleCard(rec.id)}
                  data-testid="recommendation-card-toggle"
                  className="flex w-full cursor-pointer select-none flex-wrap items-start justify-between gap-sm p-5 text-left"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="heading-4 text-heading leading-snug font-medium">{rec.title}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {rec.categories.map((cat) => (
                        <span
                          key={cat}
                          data-slot="badge"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm caption-sm text-heading bg-[#f3f1ed] border border-ghost"
                        >
                          {cat}
                        </span>
                      ))}
                      {rec.isCritical && (
                        <span
                          data-slot="badge"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm caption-sm text-white bg-[#ff6d34] font-medium"
                        >
                          Critical
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-baseline gap-1">
                    <span className="heading-2 text-heading font-semibold">+{rec.scorePercent}</span>
                    <span className="text-[14px] text-paragraph-secondary font-mono">to score</span>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="flex flex-col gap-6 px-5 pb-6 pt-1 border-t border-[#dbd7cc]/40 animate-in fade-in duration-150">
                    <p className="text-[15px] leading-relaxed text-[#4b4c4b]">{rec.description}</p>

                    {/* PageSpeed special view */}
                    {rec.pageSpeed && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="font-semibold text-heading text-[16px]">Core Web Vitals Impact</p>
                          <a
                            href={rec.pageSpeed.pageSpeedUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-blue-600 underline font-mono flex items-center gap-1"
                          >
                            <span>View on PageSpeed Insights</span>
                            <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                          <div className="p-3 rounded-lg bg-white border border-[#e0e3e6]">
                            <p className="caption-sm text-[#858a8f]">INP</p>
                            <p className="heading-4 text-[#ffae20] font-semibold">{rec.pageSpeed.inpMs} ms</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#e0e3e6]">
                            <p className="caption-sm text-[#858a8f]">LCP</p>
                            <p className="heading-4 text-[#29a07c] font-semibold">{rec.pageSpeed.lcpSeconds} s</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#e0e3e6]">
                            <p className="caption-sm text-[#858a8f]">CLS</p>
                            <p className="heading-4 text-[#29a07c] font-semibold">{rec.pageSpeed.clsScore}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#e0e3e6]">
                            <p className="caption-sm text-[#858a8f]">FCP</p>
                            <p className="heading-4 text-[#29a07c] font-semibold">{rec.pageSpeed.fcpSeconds} s</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#e0e3e6]">
                            <p className="caption-sm text-[#858a8f]">TTFB</p>
                            <p className="heading-4 text-[#29a07c] font-semibold">{rec.pageSpeed.ttfbSeconds} s</p>
                          </div>
                        </div>

                        {/* Script breakdown table */}
                        {rec.scripts && (
                          <div className="mt-2 overflow-x-auto">
                            <p className="font-semibold text-heading text-[15px] mb-2">
                              Tracking Scripts Detected ({rec.scripts.length})
                            </p>
                            <table className="w-full text-left text-[14px] bg-white rounded-lg border border-[#e0e3e6] overflow-hidden">
                              <thead className="bg-[#f8f6f4] border-b border-[#e0e3e6] text-[#4b4c4b]">
                                <tr>
                                  <th className="p-3 font-medium">Script</th>
                                  <th className="p-3 font-medium">Provider</th>
                                  <th className="p-3 font-medium">Size</th>
                                  <th className="p-3 font-medium">Blocking Time</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#e0e3e6]">
                                {rec.scripts.map((s) => (
                                  <tr key={s.name + s.order} className="hover:bg-[#faf9f8]">
                                    <td className="p-3 flex items-center gap-2 font-mono">
                                      <Image
                                        src={s.icon}
                                        alt={s.provider}
                                        width={16}
                                        height={16}
                                        className="size-4 object-contain"
                                      />
                                      <span>{s.name}</span>
                                    </td>
                                    <td className="p-3">{s.provider}</td>
                                    <td className="p-3 font-mono">{s.transferSize} KB</td>
                                    <td className="p-3 font-mono text-[#f1416c]">{s.blockingTime} ms</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {/* How-to Video & Blog links */}
                    {(rec.howToVideo || rec.howToPost) && (
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {rec.howToVideo && (
                          <a
                            href={rec.howToVideo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#dbd7cc] hover:border-[#0d0d0d] transition-colors flex-1"
                          >
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#ffe6d4] text-[#ff6d34] shrink-0">
                              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </span>
                            <div className="flex flex-col">
                              <span className="caption-sm text-[#ff6d34] font-medium">Video tutorial</span>
                              <span className="text-[14px] text-heading font-medium line-clamp-1">
                                {rec.howToTitle || "Watch video walkthrough"}
                              </span>
                            </div>
                          </a>
                        )}

                        {rec.howToPost && (
                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(rec.howToPost.title)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#dbd7cc] hover:border-[#0d0d0d] transition-colors flex-1"
                          >
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#e6e8f9] text-[#6255ad] shrink-0">
                              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                              </svg>
                            </span>
                            <div className="flex flex-col">
                              <span className="caption-sm text-[#6255ad] font-medium">Blog guide</span>
                              <span className="text-[14px] text-heading font-medium line-clamp-1">
                                {rec.howToPost.title}
                              </span>
                            </div>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
