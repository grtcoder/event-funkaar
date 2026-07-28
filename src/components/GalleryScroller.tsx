"use client";

import { useRef } from "react";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

export default function GalleryScroller({ photos }: { photos: string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const amount = scroller.clientWidth * 0.8;
    scroller.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Scroll gallery left"
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 hover:bg-[#FF6B35] hover:text-white text-[#1a1a1a] transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        ref={scrollerRef}
        className="flex items-center gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 py-6 [scrollbar-width:thin]"
      >
        {photos.map((photo) => (
          <div
            key={photo}
            className="shrink-0 snap-center w-[calc((100%-2rem)/3)] md:w-[calc((100%-6rem)/5)] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-gray-100 relative transition-transform duration-200 ease-out hover:scale-125 hover:z-10 hover:shadow-xl"
          >
            <Image
              src={`${basePath}${photo}`}
              alt="Event Funkaar past event"
              fill
              sizes="(min-width: 768px) 20vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Scroll gallery right"
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 hover:bg-[#FF6B35] hover:text-white text-[#1a1a1a] transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
