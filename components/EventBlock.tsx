"use client";
import Link from "next/link";
import Image from "next/image";
import { Event } from "../types";

interface EventBlockProps {
  event: Event;
  index: number;
}

export default function EventBlock({ event, index }: EventBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-12`}
    >
      <div className="w-full md:w-1/2 relative group">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <Image
            src={event.image}
            alt={event.name}
            width={600}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 space-y-4 text-center ${
          isEven ? "md:text-left" : "md:text-right"
        }`}
      >
        <h3 className="font-heading text-3xl md:text-4xl text-maroon mb-2 md:font-semibold">
          {event.name}
        </h3>
        <div className="flex flex-col space-y-2 text-maroon/80">
          <div
            className={`flex items-center gap-2 justify-center ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <svg
              className="w-5 h-5 text-gold"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="font-body text-lg">{event.venue}</p>
          </div>
          <div
            className={`flex items-center gap-2 justify-center ${
              isEven ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <svg
              className="w-5 h-5 text-gold"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-body text-lg">{event.date}</p>
          </div>
        </div>
        <div
          className={`flex justify-center ${
            isEven ? "md:justify-start" : "md:justify-end"
          } mt-6`}
        >
          <Link
            href={`/events/${event.slug}`}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-maroon text-ivory rounded-full hover:bg-maroon-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-body text-base">View Memories</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
