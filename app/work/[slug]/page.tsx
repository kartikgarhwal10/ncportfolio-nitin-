import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CaseStudyDetail from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Nitin Choudhary",
    };
  }

  return {
    title: `${study.title} | Case Study | Nitin Choudhary`,
    description: study.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const currentIndex = caseStudies.findIndex((s) => s.slug === resolvedParams.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const study = caseStudies[currentIndex];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="min-h-screen flex flex-col bg-[#08090C]">
      <Navbar />
      <CaseStudyDetail study={study} nextStudy={nextStudy} />
      <Footer />
    </main>
  );
}
