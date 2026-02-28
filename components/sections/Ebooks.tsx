"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { ebooks } from "@/lib/data";

export default function Ebooks() {
  return (
    <section id="ebooks" className="ebooks-section py-20 md:py-28 bg-brand-50">
      <div className="ebooks-shell max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="ebooks-header text-center mb-14"
          style={{ marginBottom: "1.25rem" }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
            Recursos
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-brand-900"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Materiais para sua jornada
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="ebooks-lead text-neutral-muted mt-3 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              textAlign: "center",
              marginInline: "auto",
              marginTop: "0.85rem",
            }}
          >
            eBooks e programas desenvolvidos com 40 anos de experiência para
            apoiar sua transformação.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="ebooks-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ rowGap: "1.5rem", columnGap: "1.5rem", marginTop: "0.25rem" }}
        >
          {ebooks.map((ebook) => (
            <motion.div
              key={ebook.title}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px rgba(124,45,140,0.15)",
              }}
              className="ebook-card flex flex-col bg-white rounded-2xl border border-brand-100 overflow-hidden transition-all duration-300 group"
            >
              {/* Cover image */}
              <div className="relative aspect-square overflow-hidden bg-brand-100">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-3 right-3 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full shadow-md">
                  {ebook.badge}
                </span>
              </div>

              {/* Content */}
              <div
                className="ebook-card-body p-6 flex flex-col gap-3 flex-1"
                style={{ padding: "1.35rem", gap: "0.9rem" }}
              >
                <h3
                  className="font-bold text-brand-900 text-lg leading-snug"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {ebook.title}
                </h3>
                <p
                  className="text-xs font-semibold text-brand-600 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {ebook.subtitle}
                </p>
                <p
                  className="text-sm text-neutral-muted leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {ebook.description}
                </p>

                <a
                  href={ebook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-cta ebook-card-cta mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-brand-700 text-white rounded-full font-semibold text-sm hover:bg-brand-800 transition-all duration-200 shadow-md hover:shadow-lg"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    paddingInline: "1.2rem",
                    paddingBlock: "0.75rem",
                    lineHeight: 1.15,
                  }}
                >
                  {ebook.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
