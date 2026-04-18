import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

import _9 from "@assets/9.jpg";

import foto_dra_marcela_hero_Dw1_D_Ld from "@assets/foto_dra_marcela_hero-Dw1-D_Ld.jpeg";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [, setLocation] = useLocation();
  
  const logoMP = "/attached_assets/9_1770605920938.jpg";
  const bgWatercolor = "/attached_assets/Untitled_design_1770238822059.png";
  const textColor = "text-[#8C7B6E]";
  const draMarcelaPhoto = "/attached_assets/IMG_2216_1770611804003.jpeg";

  const whatsappNumber = "5511916280110";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const treatments = [
    {
      title: "Harmonização Orofacial",
      description: "Equilíbrio entre estética e funcionalidade para um rosto harmônico.",
      slug: "harmonizacao-orofacial",
      fullText: "A odontologia expandiu muito, e trata também o rosto do paciente como um conjunto, buscando harmonia, saúde, estética e bem estar geral. O cirurgião dentista é o profissional mais capacitado para exercer a Harmonização Orofacial, incluindo o equilíbrio da musculatura, posicionamento dos dentes, sorriso, bruxismo e o tratamento das rugas faciais, além de melhorar o contorno do rosto."
    },
    {
      title: "Toxina Botulínica",
      description: "Neuromodulador para tratamento de rugas e bruxismo.",
      slug: "toxina-botulinica",
      fullText: "Neuro modulador conhecido popularmente como Botox. Uma neurotoxina utilizada para várias funções como rangimento ou apertamento dos dentes (bruxismo), dores de cabeça causadas por tensão, sorriso gengival, melhora das rugas de expressão, pés de galinha, rugas do queixo que vão surgindo com o envelhecimento. Além de ajudar bastante nos casos de assimetria facial."
    },
    {
      title: "Preenchimento Labial",
      description: "Volume e contorno definidos com ácido hialurônico.",
      slug: "preenchimento-labial",
      fullText: "Preenchimento realizado com ác. Hialurônico, sendo indicado para lábios finos, lábios assimétricos, para ganharmos volume (projeção) e/ou contorno, para melhorar o aspecto de boca triste (altura das comissuras labiais alinhadas) e prevenir o envelhecimento. Também podemos amenizar o código de barras (rugas que se formam ao redor da boca) e deixá-lo com volume de acordo com o perfil de cada paciente."
    },
    {
      title: "Preenchimento com Ác. Hialurônico",
      description: "Correção dos sinais de envelhecimento e volumização facial.",
      slug: "preenchimento-acido-hialuronico",
      fullText: "O Ác. Hialurônico é uma substância utilizada para preencher certas regiões da face com o objetivo de corrigir os sinais de envelhecimento, equilibrando a estética da face. É necessária uma análise facial bem-feita baseada nas proporções da face de cada paciente. Suas indicações são: Efeito lifting facial, tratamento de sulcos, rugas finas, volumização, rinomodelação, melhora do contorno facial, preenchimento de mandíbula, mento e maçã do rosto."
    },
    {
      title: "Bichectomia",
      description: "Afinamento facial e redução das bochechas.",
      slug: "bichectomia",
      fullText: "A Bichectomia é um procedimento cirúrgico que consiste na remoção da parte de um coxim gorduroso profundo localizado entre os músculos masséter e bucinador, na região das bochechas, o que gera aumento do corredor bucal e a diminuição tridimensional do terço inferior da face. É uma cirurgia feita no consultório e com uma recuperação normalmente tranquila, além de não deixar cicatriz aparente."
    },
    {
      title: "Bioestimuladores",
      description: "Produção natural de colágeno para firmeza.",
      slug: "bioestimuladores",
      fullText: "Começamos a perder colágeno a partir dos 25 anos de idade. Uma perda de aproximadamente 1% ao ano. Os Bioestimuladores são substâncias que quando injetadas na pele, promovem a formação de novo colágeno e portanto, proporcionando rejuvenescimento dos locais tratados. Recupera perda de volume, melhora flacidez, elasticidade, hidratação da pele, proporções perdidas, além da melhora do tônus e vitalidade cutânea."
    },
    {
      title: "Fios de PDO",
      description: "Sustentação e estímulo de colágeno.",
      slug: "fios-pdo",
      fullText: "Os fios de PDO são constituídos de polidioxanona (material biocompatível e absorvível pelo corpo) apresentando grande capacidade de estímulo de colágeno, correção volumétrica das áreas deprimidas como sulcos, rugas, depressões cutâneas e cicatrizes atróficas, aumenta a espessura dérmica, além de reposicionar os principais ligamentos da face. Promove resultados eficazes, do bioestímulo de colágeno ao lifting."
    },
    {
      title: "Laminados Cerâmicos",
      description: "Lentes de contato dental e facetas de porcelana.",
      slug: "laminados-ceramicos",
      fullText: "A lente de contato dental é uma lâmina de porcelana muito fina moldada em uma impressora 3D e depois de pronta, cimentada uma a uma sobre os dentes do paciente. Tem como objetivo deixar os dentes mais claros e sem defeitos, perfeitos e alinhados, além de melhorar a autoestima do paciente. Indicada para casos de dentes mal posicionados, separados, quebrados ou desgastados."
    },
    {
      title: "Lipoaspiração de Papada",
      description: "Remoção definitiva da gordura submentoniana para um perfil definido.",
      slug: "lipoaspiracao-de-papada",
      fullText: "A Lipoaspiração de Papada é um procedimento cirúrgico minimamente invasivo que remove o excesso de gordura localizada na região abaixo do queixo. O resultado é um perfil mais definido, com o ângulo cervico-mentoniano mais marcado, trazendo jovialidade e harmonia ao rosto. Resultados definitivos e naturais."
    },
    {
      title: "Odontologia Estética",
      description: "Saúde bucal e estética dental integradas.",
      slug: "odontologia",
      fullText: "Muito além do que tratar os dentes, a odontologia de hoje tem o poder de aumentar a autoestima dos pacientes, trazendo equilíbrio, beleza e rejuvenescimento. Não é sobre devolver ou criar beleza. É sobre mudar vidas! Trazer alegria e autoestima. Essa é a Odontologia Estética."
    }
  ];

  const aboutDra = {
    title: "Dra. Marcela Puglisi",
    bio: "Graduada na UNISA, Especialista e Mestranda em Harmonização Orofacial. Especialista em Endodontia e Prótese. Membro da ABRAHOF (Associação Brasileira de Harmonização Orofacial) e SBTI (Sociedade Brasileira de Toxina Botulínica e Implantes Faciais). CRO-SP 68349.",
    philosophy: "Dra Marcela Puglisi trabalha com novos conceitos na HOF, abordando o caso humanístico aliado à ciência e a arte (cultura), proporcionando um sorriso harmônico com a face. Sempre em constante estudo e atualização na HOF e odontologia estética. Trata de cada paciente de forma individualizada para obter os melhores resultados, trabalhando sempre com a naturalidade."
  };

  return (
    <div
      className="min-h-screen selection:bg-[#FDE2D9] font-sans overflow-x-hidden bg-white"
    >
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-white/70 backdrop-blur-xl border-b border-white/30">
        <div className="container h-24 flex items-center justify-between px-6 mx-auto max-w-7xl">
          <a href="/" className="flex items-center gap-6 group cursor-pointer" data-testid="link-home">
            <div className="relative">
              <img src={_9} alt="Logo MP" className="h-16 w-auto mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-white/10 blur-xl -z-10 group-hover:bg-[#FDE2D9]/30 transition-all" />
            </div>
            <div className="flex flex-col border-l border-[#FDE2D9]/40 pl-6">
              <span className="text-lg tracking-[0.2em] font-serif font-light text-[#4A3728]">Marcela Puglisi</span>
              <span className="text-[9px] tracking-[0.5em] text-[#8C7B6E] uppercase mt-1 font-bold">Estética Avançada</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-[#4A3728]">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-inicio">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-sobre">Sobre</button>
            <button onClick={() => scrollToSection('tratamentos')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-tratamentos">Tratamentos</button>
            <button onClick={() => setLocation('/produtos')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-produtos">Produtos</button>
            <button onClick={() => setLocation('/blog')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-blog">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-[#F4A48E] transition-all cursor-pointer" data-testid="nav-contato">Contato</button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-watercolor rounded-full px-10 h-12 tracking-[0.3em] text-[9px] font-black border-none text-[#4A3728] uppercase" data-testid="button-agendar-header">
                <span>AGENDAR CONSULTA</span>
              </Button>
            </a>
          </div>

          <button className="lg:hidden p-4 rounded-full bg-[#FDE2D9]/20" onClick={() => setIsMenuOpen(!isMenuOpen)} data-testid="button-menu-mobile">
            {isMenuOpen ? <X size={20} className="text-[#4A3728]" /> : <Menu size={20} className="text-[#4A3728]" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#FDE2D9]/30"
            >
              <div className="container px-6 py-8 flex flex-col gap-6">
                <button onClick={() => scrollToSection('home')} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Sobre</button>
                <button onClick={() => scrollToSection('tratamentos')} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Tratamentos</button>
                <button onClick={() => { setLocation('/produtos'); setIsMenuOpen(false); }} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Produtos</button>
                <button onClick={() => { setLocation('/blog'); setIsMenuOpen(false); }} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Blog</button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-sm tracking-[0.2em] uppercase text-[#4A3728] font-bold">Contato</button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-watercolor w-full h-14 tracking-[0.3em] text-[10px] font-bold text-[#4A3728] uppercase rounded-2xl">
                    <span>AGENDAR CONSULTA</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative"
            >
              <div className="mb-8">
                <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-6">Harmonização Orofacial</span>
                <h1 className="font-serif text-7xl md:text-[120px] text-[#4A3728] leading-[0.85] mb-12">
                  Dra. Marcela<br />
                  <span className="italic font-light ml-8 lg:ml-16 inline-block">Puglisi</span>
                </h1>
              </div>

              <div className="max-w-md relative">
                <div className="glass-panel p-10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FDE2D9] to-[#F4A48E]" />
                  <p className="text-[#6B5E54] font-light leading-relaxed text-xl mb-10 text-justify">
                    Apaixonada por rejuvenescer pessoas, imprimindo leveza e harmonia, e realçando o ideal para o seu estilo.
                  </p>
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <Button 
                      onClick={() => scrollToSection('tratamentos')}
                      className="btn-watercolor flex-1 h-16 rounded-2xl tracking-[0.15em] text-[9px] font-bold text-[#4A3728] shadow-xl"
                      data-testid="button-ver-tratamentos"
                    >
                      <span>VER TRATAMENTOS</span>
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('sobre')}
                      variant="outline" 
                      className="flex-1 h-16 rounded-2xl border-2 border-[#FDE2D9] text-[#4A3728] tracking-[0.15em] text-[9px] font-bold hover:bg-[#FDE2D9]/20 bg-white/50"
                      data-testid="button-sobre-dra"
                    >
                      SOBRE A DRA.
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="relative flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-10 glass-panel rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(74,55,40,0.25)]">
                  <img 
                    src={draMarcelaPhoto}
                    alt="Dra. Marcela Puglisi"
                    className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-105" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="sobre" className="py-20 md:py-40 bg-white/80 backdrop-blur-sm">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <span className="text-[11px] tracking-[0.8em] text-[#8C7B6E] uppercase font-bold block mb-8">{aboutDra.title}</span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#4A3728] mb-12 italic leading-tight">Ciência e Arte em Harmonia</h2>
              <div className="space-y-8 text-[#8C7B6E]/80 font-light leading-relaxed text-lg text-justify mb-10">
                <p>{aboutDra.bio}</p>
                <p>{aboutDra.philosophy}</p>
              </div>

              {/* Espaço para o vídeo do perfil */}
              <div className="mb-12 relative aspect-[9/16] w-full max-w-[300px] mx-auto lg:mx-0 overflow-hidden rounded-3xl shadow-2xl">
                <video 
                  src="/src/assets/videos/dra-marcela-profile.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {["ABRAHOF", "SBTI", "Esp. Endodontia", "Esp. Prótese", "Esp. HOF", "Mestranda HOF"].map((cert) => (
                  <div key={cert} className="glass-panel py-4 px-6 rounded-xl flex items-center gap-3">
                    <Sparkles size={14} className="text-[#F4A48E]" />
                    <span className="text-[10px] tracking-[0.2em] font-bold text-[#4A3728] uppercase">{cert}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-watercolor mt-12 h-16 px-12 rounded-2xl tracking-[0.3em] text-[10px] font-bold text-[#4A3728] shadow-xl" data-testid="button-agendar-sobre">
                  <span>AGENDAR CONSULTA</span>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="tratamentos" className="py-20 md:py-40 relative">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-4">Excelência</span>
            <h2 className="font-serif text-6xl md:text-7xl text-[#4A3728] mb-4 italic">Nossos Tratamentos</h2>
            <p className="text-[#8C7B6E]/80 text-lg font-light tracking-widest uppercase">Realce sua beleza natural com segurança</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-[2.5rem] p-10 relative group cursor-pointer overflow-hidden flex flex-col text-center"
                data-testid={`card-tratamento-${t.slug}`}
              >
                <h3 className="font-serif text-2xl text-[#4A3728] mb-4 group-hover:scale-105 transition-transform">{t.title}</h3>
                <p className="text-[#8C7B6E]/80 font-light text-sm leading-relaxed mb-8 flex-grow">{t.description}</p>
                <a 
                  href={`/tratamento/${t.slug}`} 
                  className="mt-auto flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] uppercase font-bold text-[#F4A48E] hover:text-[#4A3728] transition-colors"
                  data-testid={`link-tratamento-${t.slug}`}
                >
                  Saiba Mais <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-40 bg-white/80 backdrop-blur-sm">
        <div className="container px-6 mx-auto max-w-5xl text-center">
          <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-12">Beleza, Harmonia, Naturalidade</span>
          <div className="glass-panel p-16 md:p-20 rounded-[4rem] relative">
            <p className="font-serif text-3xl md:text-4xl text-[#4A3728] leading-relaxed mb-12 italic">
              "Apaixonada por Rejuvenescer Pessoas, Imprimindo Leveza e Harmonia, e Realçando o Ideal para o Seu Estilo"
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-watercolor h-16 px-12 rounded-2xl tracking-[0.3em] text-[10px] font-bold text-[#4A3728] shadow-xl" data-testid="button-agendar-quote">
                <span>AGENDE SUA CONSULTA</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section id="blog" className="py-20 md:py-40">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-24 flex-wrap gap-6">
            <div>
              <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-4">Editorial</span>
              <h2 className="font-serif text-6xl text-[#4A3728] italic">O Blog</h2>
            </div>
            <button 
              onClick={() => setLocation('/blog')}
              className="text-[11px] tracking-[0.4em] uppercase font-bold text-[#F4A48E] flex items-center gap-4 group cursor-pointer"
              data-testid="link-ver-todos-blog"
            >
              Ver Todos <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: "Mar 2023", title: "Harmonização Orofacial: O que é e como funciona", slug: "harmonizacao-orofacial-guia" },
              { date: "Mar 2023", title: "Toxina Botulínica: Muito além da estética", slug: "toxina-botulinica-completo" },
              { date: "Mar 2023", title: "Bioestimuladores: Recupere o colágeno perdido", slug: "bioestimuladores-guia" }
            ].map((post, i) => (
              <a 
                key={i} 
                href={`/blog/${post.slug}`} 
                className="glass-card p-10 rounded-[2.5rem] group"
                data-testid={`card-blog-${post.slug}`}
              >
                <span className="text-[10px] tracking-[0.3em] text-[#8C7B6E] uppercase block mb-6">{post.date}</span>
                <h3 className="font-serif text-2xl text-[#4A3728] mb-8 leading-tight group-hover:text-[#F4A48E] transition-colors">{post.title}</h3>
                <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-[#4A3728]">
                  Ler Mais <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer id="contato" className="py-20 md:py-40 bg-white/90 backdrop-blur-sm border-t border-[#FDE2D9]/30">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-8">Agendamento</span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#4A3728] mb-16 italic">Entre em Contato</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDE2D9]/30 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-[#F4A48E]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold mb-3">Endereço</h4>
                    <p className="text-xl font-light text-[#4A3728]">Av. Cidade Jardim, 427 - 7º andar <br /> São Paulo</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDE2D9]/30 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-[#F4A48E]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold mb-3">WhatsApp</h4>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xl font-light text-[#4A3728] hover:text-[#F4A48E] transition-colors">
                      (11) 91628-0110
                    </a>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDE2D9]/30 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-[#F4A48E]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold mb-3">Horário</h4>
                    <p className="text-xl font-light text-[#4A3728]">Seg a Sex: 8h às 18h <br /> Sáb: 8h às 14h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-12 md:p-16 rounded-[3rem]">
              <h3 className="font-serif text-3xl text-[#4A3728] mb-10 italic">Solicite um Atendimento</h3>
              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold">Nome Completo</label>
                  <input 
                    type="text"
                    className="w-full bg-white/50 border border-[#FDE2D9] rounded-xl py-4 px-5 outline-none font-light text-lg focus:border-[#F4A48E] transition-colors" 
                    data-testid="input-nome"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold">WhatsApp</label>
                  <input 
                    type="tel"
                    className="w-full bg-white/50 border border-[#FDE2D9] rounded-xl py-4 px-5 outline-none font-light text-lg focus:border-[#F4A48E] transition-colors" 
                    data-testid="input-whatsapp"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold">Tratamento de Interesse</label>
                  <select 
                    className="w-full bg-white/50 border border-[#FDE2D9] rounded-xl py-4 px-5 outline-none font-light text-lg focus:border-[#F4A48E] transition-colors"
                    data-testid="select-tratamento"
                  >
                    <option value="">Selecione...</option>
                    {treatments.map((t, i) => (
                      <option key={i} value={t.slug}>{t.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#8C7B6E] font-bold">Mensagem</label>
                  <textarea 
                    className="w-full bg-white/50 border border-[#FDE2D9] rounded-xl py-4 px-5 outline-none font-light text-lg resize-none focus:border-[#F4A48E] transition-colors" 
                    rows={3}
                    data-testid="textarea-mensagem"
                  />
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    type="button"
                    className="btn-watercolor w-full h-16 rounded-2xl tracking-[0.3em] text-[10px] font-bold text-[#4A3728] shadow-xl"
                    data-testid="button-enviar-formulario"
                  >
                    <span>ENVIAR VIA WHATSAPP</span>
                  </Button>
                </a>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-[#001F3F] mt-24 py-12 border-t border-white/10">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <img src={logoMP} alt="Logo MP" className="h-10 w-auto brightness-0 invert" />
                <span className="text-sm text-white/70">Dra. Marcela Puglisi - CRO-SP 68349</span>
              </div>
              <p className="text-sm text-white/70 text-center">
                Estética Orofacial
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
