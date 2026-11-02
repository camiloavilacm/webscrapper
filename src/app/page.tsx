import { Header } from "@/components/sites/stape/Header";
import { ReportHeader } from "@/components/sites/stape/ReportHeader";
import { OverallScore } from "@/components/sites/stape/OverallScore";
import { DetectedTechnologies } from "@/components/sites/stape/DetectedTechnologies";
import { TrackingArchitecture } from "@/components/sites/stape/TrackingArchitecture";
import { EstimatedLosses } from "@/components/sites/stape/EstimatedLosses";
import { Competitors } from "@/components/sites/stape/Competitors";
import { RecommendedActions } from "@/components/sites/stape/RecommendedActions";
import { ReportFooter } from "@/components/sites/stape/ReportFooter";

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
            <ReportFooter />
          </main>
        </div>
      </div>
    </div>
  );
}
