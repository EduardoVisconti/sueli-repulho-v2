import { config, whatsappGeneral } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Sueli Repulho
            </h3>
            <p
              className="text-brand-300 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Psicóloga e Mentora de Transformação Emocional.
              <br />
              Transformando ações em resultados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {["#sobre", "#servicos", "#depoimentos", "#ebooks", "#contato"].map(
                (href) => {
                  const labels: Record<string, string> = {
                    "#sobre": "Sobre",
                    "#servicos": "Serviços",
                    "#depoimentos": "Depoimentos",
                    "#ebooks": "eBooks",
                    "#contato": "Contato",
                  };
                  return (
                    <a
                      key={href}
                      href={href}
                      className="text-brand-300 hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "var(--font-lato), sans-serif" }}
                    >
                      {labels[href]}
                    </a>
                  );
                }
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold text-brand-200 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Contato
            </h4>
            <div
              className="flex flex-col gap-2 text-sm text-brand-300"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <a
                href={whatsappGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                💬 WhatsApp
              </a>
              {config.instagram && (
                <a
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  📸 Instagram
                </a>
              )}
              <span>📱 Atendimento online · Brasil</span>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-brand-400 text-sm"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            © 2025 Sueli Repulho · Psicóloga e Mentora
          </p>
          <p
            className="text-brand-500 text-xs"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Desenvolvido por{" "}
            <a
              href="https://eduardo-visconti.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 hover:text-white transition-colors"
            >
              Eduardo Visconti
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
