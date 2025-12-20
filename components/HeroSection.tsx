import Image from "next/image";
import hero from "@/public/images/hero2.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/50 z-10" />
      <Image
        src={hero}
        alt="Wedding Hero"
        placeholder="blur"
        fill
        quality={90}
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4 mt-[40vh]">
        <div
          className={`transition-all duration-1000 opacity-100 translate-y-0"
          }`}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl mb-4 tracking-wide">
            Anuj & Mehak
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <h2 className="font-body text-xl md:text-2xl lg:text-3xl font-light drop-shadow-lg tracking-wider">
            {/* We&apos;re getting married */}
            Bound by Love, United Forever.
          </h2>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
