"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = () => {
    const x = dragX.get();
    if (x < -50) goTo(current + 1);
    else if (x > 50) goTo(current - 1);
    dragX.set(0);
    setDragging(false);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
            Depoimentos
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-brand-900"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            O que dizem as minhas clientes
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none"
              >
                {[testimonials[current], testimonials[(current + 1) % testimonials.length]].map(
                  (t, i) => (
                    <div
                      key={i}
                      className="bg-brand-50 rounded-2xl p-8 border border-brand-100 flex flex-col gap-5"
                    >
                      {/* Quote mark */}
                      <span
                        className="text-5xl font-bold text-accent-400 leading-none"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        "
                      </span>

                      <p
                        className="text-neutral-text leading-relaxed flex-1 text-base italic"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {t.text}
                      </p>

                      <div className="flex items-center gap-3 pt-2 border-t border-brand-200">
                        {/* Avatar */}
                        <div className="w-11 h-11 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {t.initials}
                        </div>
                        <div>
                          <p
                            className="font-semibold text-brand-800"
                            style={{ fontFamily: "var(--font-lato), sans-serif" }}
                          >
                            {t.name}
                          </p>
                          <p
                            className="text-xs text-neutral-muted"
                            style={{ fontFamily: "var(--font-lato), sans-serif" }}
                          >
                            Cliente
                          </p>
                        </div>
                        {/* Stars */}
                        <div className="ml-auto flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <span key={s} className="text-accent-400 text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-brand-700"
                  : "w-3 h-3 bg-brand-200 hover:bg-brand-400"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        <p
          className="text-center text-xs text-neutral-muted mt-4"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Arraste ou clique nos pontos para navegar
        </p>
      </div>
    </section>
  );
}
