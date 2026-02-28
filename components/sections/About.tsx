"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  fadeInLeft,
  stagger,
  viewportConfig,
} from "@/lib/animations";
import { differentials } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="about-section py-20 md:py-28 bg-white">
      <div className="about-shell max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="about-intro-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16"
          style={{ marginBottom: "2rem", rowGap: "2rem", columnGap: "2.5rem" }}
        >
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Background decoration */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-100 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-2xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/sueli-about.png"
                  alt="Sueli Repulho em atendimento"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Credential badge */}
              <div className="absolute -bottom-6 left-6 bg-brand-700 text-white rounded-2xl px-5 py-4 shadow-xl">
                <p
                  className="text-xs text-brand-200 mb-1"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  CRP registrada
                </p>
                <p
                  className="font-bold text-sm"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  Psicóloga Clínica
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="about-text-col flex flex-col gap-5"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span className="w-8 h-0.5 bg-accent-500 inline-block" />
              Sobre Sueli
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-brand-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Uma jornada de cura
              <br />
              <span className="text-brand-700">começa com presença</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-muted leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Sou Sueli Repulho, psicóloga clínica com{" "}
              <strong className="text-brand-700">40 anos de experiência</strong>{" "}
              acompanhando pessoas em momentos de transição, cura e
              autoconhecimento. Especializei-me em Análise Transacional, Terapia
              Multidimensional, Rebirthing, TVP e Barra de Access.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-muted leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Minha abordagem é acolhedora, sem julgamentos e profundamente
              personalizada. Acredito que cada pessoa carrega em si todas as
              ferramentas necessárias para florescer — meu papel é ajudá-la a
              encontrá-las.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-muted leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Atendo{" "}
              <strong className="text-brand-700">100% online</strong>, o que
              permite que você tenha acesso a um espaço seguro de cuidado
              emocional onde quer que esteja no mundo.
            </motion.p>

            <motion.blockquote
              variants={fadeInUp}
              className="border-l-4 border-accent-500 pl-4 italic text-brand-800 font-medium"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              "Eu acredito no seu sucesso e merecimento!"
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Differentials */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="about-differentials grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{ marginTop: "1.25rem", rowGap: "1.25rem", columnGap: "1.25rem" }}
        >
          {differentials.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="about-diff-card flex flex-col gap-3 p-6 bg-neutral-warm rounded-2xl border border-brand-100 transition-all duration-300"
              style={{ padding: "1.5rem", minHeight: "12.5rem" }}
            >
              <span className="text-3xl">{item.icon}</span>
              <h3
                className="font-bold text-brand-800"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-neutral-muted leading-relaxed"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
