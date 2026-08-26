import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Antellay Space | Space Intelligence Reimagined",
  description: "The AI operating system for satellite intelligence, earth observation and the space economy.",
};

export default function AntellaySpacePage() {
  return (
    <main className="bg-[#020407] text-white">
      <h1 className="sr-only">Antellay Space — Space Intelligence Reimagined</h1>
      <section aria-label="Antellay Space experience" className="mx-auto w-full max-w-[1440px] overflow-hidden bg-black">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1024 / 1370" }}>
          <Image
            src="/images/products/antellay-space-reference.png"
            alt="Antellay Space platform showcasing satellite intelligence, earth observation, mission analytics and secure space infrastructure"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="absolute left-0 top-[-6.55%] h-auto w-full select-none"
          />

          <Link
            href="http://www.antellay.space"
            aria-label="Explore Antellay Space operating system"
            className="absolute left-[8.4%] top-[20.1%] h-[4.2%] w-[18.5%] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a45] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          />
          <Link
            href="/contact"
            aria-label="Contact Antellay Space team"
            className="absolute bottom-[5.7%] left-[46.5%] h-[5.5%] w-[7%] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a45] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          />
        </div>
      </section>
    </main>
  );
}
