import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

const Blog = () => {
  const [, setLocation] = useLocation();
  const bgWatercolor = "/attached_assets/Untitled_design_1770238822059.png";

  const posts = [
    {
      title: "Harmonização Orofacial: O que é e como funciona",
      excerpt: "A odontologia expandiu muito, e trata também o rosto do paciente como um conjunto, buscando harmonia, saúde, estética e bem estar geral.",
      date: "Mar 2023",
      slug: "harmonizacao-orofacial-guia",
      category: "Tratamentos"
    },
    {
      title: "Toxina Botulínica: Muito além da estética",
      excerpt: "Uma neurotoxina utilizada para várias funções como bruxismo, dores de cabeça, sorriso gengival e melhora das rugas de expressão.",
      date: "Mar 2023",
      slug: "toxina-botulinica-completo",
      category: "Tratamentos"
    },
    {
      title: "Bioestimuladores: Recupere o colágeno perdido",
      excerpt: "Começamos a perder colágeno a partir dos 25 anos. Os bioestimuladores promovem a formação de novo colágeno para rejuvenescimento.",
      date: "Mar 2023",
      slug: "bioestimuladores-guia",
      category: "Tratamentos"
    },
    {
      title: "Bichectomia: Afinamento facial definitivo",
      excerpt: "Procedimento cirúrgico para remoção do coxim gorduroso das bochechas, gerando um rosto mais afinado e definido.",
      date: "Mar 2023",
      slug: "bichectomia-guia",
      category: "Cirurgias"
    },
    {
      title: "Fios de PDO: Do bioestímulo ao lifting",
      excerpt: "Fios absorvíveis que estimulam colágeno e promovem efeito lifting imediato, incluindo o famoso FOX EYES.",
      date: "Mar 2023",
      slug: "fios-pdo-guia",
      category: "Tratamentos"
    },
    {
      title: "Preenchimento com Ácido Hialurônico: Guia completo",
      excerpt: "Substância versátil para corrigir sinais de envelhecimento, volumização e harmonização facial full face.",
      date: "Mar 2023",
      slug: "preenchimento-hialuronico-guia",
      category: "Tratamentos"
    },
    {
      title: "Laminados Cerâmicos: O sorriso perfeito",
      excerpt: "Lentes de contato dental, facetas e coroas de porcelana para um sorriso branco, alinhado e natural.",
      date: "Mar 2023",
      slug: "laminados-ceramicos-guia",
      category: "Odontologia"
    },
    {
      title: "Clareamento Dental: Tipos e resultados",
      excerpt: "Clareamento à laser ou caseiro? Entenda as diferenças e escolha o melhor para você.",
      date: "Mar 2023",
      slug: "clareamento-dental-guia",
      category: "Odontologia"
    }
  ];

  return (
    <div 
      className="min-h-screen pt-32 pb-24 px-6"
      style={{
        backgroundImage: `url(${bgWatercolor})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <button 
            onClick={() => setLocation('/')}
            className="inline-flex items-center gap-2 text-[#8C7B6E] hover:text-[#4A3728] transition-colors mb-12 uppercase tracking-[0.3em] text-[10px] font-bold cursor-pointer"
            data-testid="link-voltar-home"
          >
            <ArrowLeft size={14} /> Home
          </button>
          <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-4">Editorial</span>
          <h1 className="font-serif text-6xl md:text-7xl text-[#4A3728] italic">O Blog</h1>
          <p className="mt-6 text-lg text-[#6B5E54] font-light max-w-2xl mx-auto">
            Conteúdo especializado sobre harmonização orofacial, odontologia estética e cuidados com a beleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a 
              key={i} 
              href={`/blog/${post.slug}`} 
              className="glass-card p-10 rounded-[2.5rem] group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              data-testid={`card-blog-${post.slug}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] tracking-[0.3em] text-[#8C7B6E] uppercase">{post.date}</span>
                <span className="text-[9px] tracking-[0.2em] text-[#F4A48E] uppercase font-bold bg-[#FDE2D9]/30 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h2 className="font-serif text-2xl text-[#4A3728] italic mb-6 group-hover:text-[#F4A48E] transition-colors leading-tight">{post.title}</h2>
              <p className="text-sm text-[#6B5E54] font-light leading-relaxed mb-8">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase font-bold text-[#4A3728]">
                Ler Artigo <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
