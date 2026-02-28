"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, stagger, viewportConfig, fadeInRight } from "@/lib/animations";
import { whatsappGeneral } from "@/lib/data";

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector("#servicos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-50 pt-16">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "linear-gradient(135deg, #e9d5ff, #c084fc)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
        style={{ background: "linear-gradient(135deg, #fdba74, #fb923c)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span className="w-8 h-0.5 bg-accent-500 inline-block" />
            Psicóloga e Mentora de Transformação Emocional
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Reconecte-se com{" "}
            <span className="text-brand-700">quem você</span>{" "}
            <span className="text-accent-500">realmente é</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-neutral-muted leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Com 40 anos de experiência como psicóloga clínica, te ajudo a
            superar bloqueios emocionais, resolver conflitos internos e
            construir uma vida mais leve, autêntica e significativa.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={scrollToServices}
              className="px-7 py-3.5 bg-brand-700 text-white font-semibold rounded-full hover:bg-brand-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Conhecer os Serviços
            </button>
            <a
              href={whatsappGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border-2 border-accent-500 text-accent-600 font-semibold rounded-full hover:bg-accent-500 hover:text-white transition-all duration-200 text-center"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              💬 Falar no WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 pt-2 text-sm text-neutral-muted"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span className="flex items-center gap-2">
              <span className="text-accent-500">✓</span>
              40 anos de experiência
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent-500">✓</span>
              100% online
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent-500">✓</span>
              Todo o Brasil
            </span>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-brand-200 scale-110 opacity-60" />
            <div className="absolute inset-0 rounded-full border-2 border-accent-200 scale-125 opacity-40" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/sueli-hero.png"
                alt="Sueli Repulho — Psicóloga e Mentora"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-brand-100"
            >
              <p
                className="text-xs text-neutral-muted"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Experiência
              </p>
              <p
                className="text-lg font-bold text-brand-700"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                40 anos
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-4 -right-4 bg-accent-500 rounded-2xl shadow-xl px-4 py-3"
            >
              <p
                className="text-xs text-orange-100"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Atendimento
              </p>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Online 🇧🇷
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
