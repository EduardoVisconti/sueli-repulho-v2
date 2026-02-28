export const config = {
  whatsappNumber: "5519982427890",
  email: "contato@suelirepulho.com.br",
  instagram: "https://instagram.com/suelirepulho",
  site: "https://suelirepulho.com.br",
};

export const whatsappUrl = (service: string) =>
  `https://wa.me/${config.whatsappNumber}?text=Olá Sueli! Tenho interesse em saber mais sobre: ${encodeURIComponent(service)}`;

export const whatsappGeneral = () =>
  `https://wa.me/${config.whatsappNumber}?text=Olá Sueli! Gostaria de agendar uma sessão.`;

export const services = [
  {
    icon: "🌱",
    title: "Processo RAJA",
    description:
      "Método exclusivo desenvolvido com 40 anos de experiência. Resolva conflitos internos, supere bloqueios emocionais e alcance suas metas pessoais e profissionais de forma objetiva e profunda.",
    duration: "Mentoria contínua",
    cta: "Saiba mais",
  },
  {
    icon: "🧘",
    title: "Terapia Individual",
    description:
      "Atendimento terapêutico individual com abordagens como Análise Transacional, Terapia Multidimensional, Rebirthing e Barra de Access. Foco em autoconhecimento e regulação emocional.",
    duration: "Sessões de 60 min",
    cta: "Saiba mais",
  },
  {
    icon: "✨",
    title: "Sessão Avulsa",
    description:
      "Uma sessão única para quem está passando por um momento pontual de dificuldade e precisa de um espaço seguro para ser ouvida, acolhida e orientada.",
    duration: "Sessão única",
    cta: "Agendar agora",
  },
];

export const testimonials = [
  {
    name: "Ana Paula M.",
    text: "O processo com a Sueli foi transformador. Aprendi a me ouvir de verdade e hoje consigo lidar com situações que antes me paralisavam completamente.",
    initials: "AP",
  },
  {
    name: "Fernanda S.",
    text: "Cada sessão era um espaço de acolhimento genuíno. A Sueli tem uma sensibilidade incrível e me ajudou a reconectar com partes de mim que eu havia abandonado.",
    initials: "FS",
  },
  {
    name: "Carla R.",
    text: "Eu não acreditava que atendimento online poderia ser tão profundo. A Sueli criou um ambiente de confiança que me permitiu me abrir completamente.",
    initials: "CR",
  },
  {
    name: "Juliana T.",
    text: "Depois de 3 meses de mentoria, me sinto uma pessoa diferente — mais leve, mais confiante e muito mais conectada com o que realmente importa para mim.",
    initials: "JT",
  },
];

export const ebooks = [
  {
    title: "Elaboração do Luto",
    subtitle: "Um Guia da Dor à Paz da Saudade",
    description:
      "Um guia acolhedor para quem vive o luto e busca transformar a dor em aprendizado e saudade em paz.",
    badge: "eBook",
    cta: "Saiba mais",
    image: "/images/ebooks/capa-luto.png",
    // TODO: substituir pelo link real (Hotmart/Kiwify)
    link: whatsappUrl("eBook Elaboração do Luto"),
  },
  {
    title: "Chega de se Anular",
    subtitle: "Desperte sua Autonomia e Liberdade",
    description:
      "Aprenda a identificar padrões que te mantêm presa e escolha você mesma. De R$49 por apenas R$27.",
    badge: "R$ 27",
    cta: "Adquirir agora",
    image: "/images/ebooks/capa-anular.png",
    // TODO: substituir pelo link real
    link: whatsappUrl("eBook Chega de se Anular"),
  },
  {
    title: "Processo RAJA",
    subtitle: "Resolva Conflitos e Alcance suas Metas",
    description:
      "O método exclusivo desenvolvido por Sueli Repulho em 40 anos de experiência. Transformação profunda e objetiva.",
    badge: "Mentoria",
    cta: "Conhecer o Processo",
    image: "/images/ebooks/capa-raja.png",
    link: "https://mentoria.suelirepulho.com.br/processoraja/",
  },
];

export const differentials = [
  {
    icon: "🌿",
    title: "Atendimento humanizado",
    description: "Um espaço seguro, sem julgamentos, de acolhimento genuíno",
  },
  {
    icon: "🎯",
    title: "Método exclusivo",
    description: "40 anos de experiência sintetizados no Processo RAJA",
  },
  {
    icon: "💻",
    title: "100% online",
    description: "Atendo de qualquer lugar do Brasil com profundidade e cuidado",
  },
];
