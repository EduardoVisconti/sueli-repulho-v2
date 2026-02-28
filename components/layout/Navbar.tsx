"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { whatsappGeneral } from "@/lib/data";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "eBooks", href: "#ebooks" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-100"
            : "bg-transparent"
        }`}
      >
        <div className="navbar-shell max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded-full">
              <Image
                src="/images/logo-sueli.png"
                alt="Logo Sueli Repulho"
                fill
                className="object-cover"
              />
            </div>
            <span
              className="font-display text-lg font-bold text-brand-800 group-hover:text-brand-700 transition-colors"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Sueli Repulho
            </span>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-neutral-text hover:text-brand-700 transition-colors font-medium cursor-pointer"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta ml-2 px-5 py-2 bg-accent-500 text-white text-sm font-semibold rounded-full hover:bg-accent-600 transition-colors shadow-sm"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                paddingInline: "1.2rem",
                paddingBlock: "0.7rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1.15,
              }}
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-brand-50 transition-colors"
            aria-label="Abrir menu"
          >
            <span
              className={`block w-6 h-0.5 bg-brand-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-brand-100">
                <span
                  className="font-display text-lg font-bold text-brand-800"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Sueli Repulho
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-brand-50 text-brand-700"
                  aria-label="Fechar menu"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left px-4 py-3 text-neutral-text hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-colors font-medium"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <div className="p-6 border-t border-brand-100">
                <a
                  href={whatsappGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cta flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-colors"
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    paddingInline: "1rem",
                    paddingBlock: "0.8rem",
                    lineHeight: 1.15,
                  }}
                >
                  💬 Agendar pelo WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
