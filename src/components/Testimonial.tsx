"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Nabila Toufiq",
    country: "USA",
    feedback:
      "Working with Omar on our mobile app development project was an absolute pleasure. His expertise and creativity were impressive!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Ahmed Al-Mutairi",
    country: "Saudi Arabia",
    feedback:
      "Omar delivered our project on time with outstanding quality. His problem-solving skills are exceptional!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 3,
    name: "Wei Ling",
    country: "Singapore",
    feedback:
      "Omar is highly professional and knowledgeable. I look forward to collaborating with him again!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 4,
    name: "Tashi Dorji",
    country: "Bhutan",
    feedback:
      "An excellent experience working with Omar! His attention to detail and dedication made the project a success.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 5,
    name: "Nashra Alam",
    country: "Bangladesh",
    feedback:
      "Omar’s expertise in mobile development helped us bring our idea to life. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollSnaps = useMemo(
    () => emblaApi?.scrollSnapList() ?? [],
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto w-[92%] max-w-7xl py-14 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#08a9af]" />
              Testimonials
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What clients say
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              Feedback from real collaborations—focused on delivery quality,
              communication, and reliability.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition shadow-sm"
              aria-label="Previous testimonial"
              type="button"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition shadow-sm"
              aria-label="Next testimonial"
              type="button"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_42%] px-3"
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-slate-200">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 leading-tight truncate">
                        {t.name}
                      </p>
                      <p className="text-sm text-slate-600">{t.country}</p>
                    </div>

                    <span className="ml-auto text-xs text-[#08a9af]">
                      ★★★★★
                    </span>
                  </div>

                  <div className="mt-4">
                    <FaQuoteLeft className="text-slate-400" />
                    <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
                      {t.feedback}
                    </p>
                  </div>

                  <div className="mt-5 h-px w-full bg-slate-100" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Verified client
                    </span>
                    <span className="text-xs text-slate-500">
                      Delivered with care
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {scrollSnaps.length > 1 && (
          <div className="mt-7 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={[
                  "h-2.5 rounded-full transition",
                  i === selectedIndex
                    ? "w-7 bg-[#08a9af]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
                aria-label={`Go to testimonial ${i + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
