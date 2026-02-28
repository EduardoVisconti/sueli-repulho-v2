"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn, fadeInUp, stagger, viewportConfig } from "@/lib/animations";
import { whatsappGeneral } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-accent-100 rounded-3xl rotate-6" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sueli-contato.png"
                  alt="Sueli Repulho — Entre em contato"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span className="w-8 h-0.5 bg-accent-500 inline-block" />
              Contato
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-brand-900 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Pronta para começar
              <br />
              <span className="text-brand-700">sua transformação?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-muted leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              O primeiro passo é o mais importante. Me manda uma mensagem e
              vamos conversar sobre como posso te ajudar a alcançar o equilíbrio
              e a vida que você merece.
            </motion.p>

            {/* WhatsApp CTA */}
            <motion.a
              variants={fadeInUp}
              href={whatsappGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-accent-500 text-white text-lg font-bold rounded-full shadow-xl hover:bg-accent-600 transition-all duration-200 hover:shadow-2xl"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar comigo no WhatsApp
            </motion.a>

            {/* Info list */}
            <motion.div
              variants={stagger}
              className="flex flex-col gap-3 pt-2"
            >
              {[
                { icon: "📱", text: "Atendimento online · Todo o Brasil" },
                { icon: "🕐", text: "Respondo em até 24 horas" },
                { icon: "🔒", text: "Sigilo e ética profissional garantidos" },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-neutral-muted text-sm"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
