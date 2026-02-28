"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { services, whatsappUrl } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="services-section py-20 md:py-28 bg-brand-50">
      <div className="services-shell max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="services-header text-center mb-14"
          style={{ marginBottom: "1.25rem" }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
            Serviços
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-brand-900"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Como posso te ajudar
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ rowGap: "1.5rem", columnGap: "1.5rem", marginTop: "0.25rem" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px rgba(124,45,140,0.15)",
              }}
              className="service-card flex flex-col bg-white rounded-2xl border border-brand-100 overflow-hidden transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div
                className={`h-1.5 ${index === 0 ? "bg-brand-700" : index === 1 ? "bg-accent-500" : "bg-brand-500"}`}
              />

              <div
                className="service-card-body p-7 flex flex-col gap-4 flex-1"
                style={{ padding: "1.5rem", gap: "1rem" }}
              >
                <span className="text-4xl">{service.icon}</span>
                <h3
                  className="text-xl font-bold text-brand-900"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-neutral-muted leading-relaxed text-sm flex-1"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span
                    className="inline-flex items-center px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-200"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {service.duration}
                  </span>
                </div>

                <a
                  href={whatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ui-cta service-card-cta mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                    index === 2
                      ? "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg"
                      : "border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    paddingInline: "1.2rem",
                    paddingBlock: "0.75rem",
                    lineHeight: 1.15,
                  }}
                >
                  💬 {service.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="services-note text-center text-neutral-muted text-sm mt-10"
          style={{ fontFamily: "var(--font-lato), sans-serif", marginTop: "1rem" }}
        >
          Dúvidas sobre qual serviço é ideal para você?{" "}
          <a
            href={whatsappUrl("orientação sobre os serviços")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 font-semibold hover:text-accent-700 underline underline-offset-2"
          >
            Me chame no WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
