"use client";
import { useEffect, useRef, useState } from "react";
import EventBlock from "./EventBlock";
import { events } from "../constants";

export default function Timeline() {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = eventRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleEvents((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-maroon mb-4 md:font-semibold">
            Our Journey
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto" />
          <p className="font-body text-lg text-maroon/80 mt-6">
            Relive the beautiful moments from our celebrations
          </p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {events.map((event, index) => (
            <div
              key={event.slug}
              ref={(el) => {
                eventRefs.current[index] = el;
              }}
              className={`transition-all duration-1000 ${
                visibleEvents.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <EventBlock event={event} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
