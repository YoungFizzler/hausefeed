import NotebookHero from "@/components/notebook-hero";
import Feature1 from "@/components/feature-grid";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
      <NotebookHero />
      <Feature1 />
    </main>
  );
}
