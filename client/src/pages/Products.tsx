import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [, setLocation] = useLocation();
  const bgWatercolor = "/attached_assets/MP_Marcela_Puglise_1770631714736.png";

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${bgWatercolor})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      
      <nav className="absolute top-0 w-full z-50 p-8">
        <button 
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-[#4A3728] hover:text-[#F4A48E] transition-colors font-bold tracking-widest text-[10px] uppercase"
        >
          <ArrowLeft size={16} /> Voltar para o Início
        </button>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <span className="text-[11px] tracking-[0.8em] uppercase text-[#8C7B6E] font-bold block mb-8">E-commerce</span>
        <h1 className="font-serif text-6xl md:text-8xl text-[#4A3728] mb-8 italic">Produtos Assinados</h1>
        <div className="glass-panel py-12 px-16 rounded-[3rem] max-w-2xl mx-auto backdrop-blur-xl border-white/50">
          <p className="font-serif text-3xl md:text-4xl text-[#4A3728] mb-12 italic">
            Em Breve
          </p>
          <p className="text-[#8C7B6E]/80 font-light leading-relaxed text-lg mb-12">
            Uma linha exclusiva de cosméticos e produtos de cuidados faciais selecionados e assinados pela Dra. Marcela Puglisi.
          </p>
          <Button 
            onClick={() => setLocation('/')}
            className="btn-watercolor h-16 px-12 rounded-2xl tracking-[0.3em] text-[10px] font-bold text-[#4A3728] shadow-xl"
          >
            <span>AVISE-ME NO LANÇAMENTO</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
