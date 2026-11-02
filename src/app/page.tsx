import { Header } from "@/components/sites/tracking-checker/Header";
import { ReportHeader } from "@/components/sites/tracking-checker/ReportHeader";
import { OverallScore } from "@/components/sites/tracking-checker/OverallScore";
import { DetectedTechnologies } from "@/components/sites/tracking-checker/DetectedTechnologies";
import { TrackingArchitecture } from "@/components/sites/tracking-checker/TrackingArchitecture";
import { EstimatedLosses } from "@/components/sites/tracking-checker/EstimatedLosses";
import { Competitors } from "@/components/sites/tracking-checker/Competitors";
import { RecommendedActions } from "@/components/sites/tracking-checker/RecommendedActions";

export default function Home() {
  return (
    <div className="page-wrapper min-h-screen flex flex-col bg-[#f3f1ed]">
      <Header />
      <div className="CibPdq_wrapper">
        <div className="visuals-neutral relative flex grow flex-col items-center px-md py-lg-responsive lg:px-xl">
          <main className="flex w-full max-w-[1336px] flex-col gap-md lg:gap-lg pb-16">
            <ReportHeader />
            <section className="flex flex-col gap-md xl:grid xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:items-stretch">
              <OverallScore />
              <DetectedTechnologies />
            </section>
            <TrackingArchitecture />
            <EstimatedLosses />
            <Competitors />
            <RecommendedActions />
          </main>
        </div>
      </div>
    </div>
  );
}
