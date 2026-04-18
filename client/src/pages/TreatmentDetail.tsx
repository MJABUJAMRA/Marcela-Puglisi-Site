import React from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import lipoBeforeAfter1 from "@assets/IMG_2287_1770657411318.jpeg";
import lipoBeforeAfter2 from "@assets/IMG_2288_1770657411318.jpeg";
import lipoBeforeAfter3 from "@assets/IMG_2289_1770657411318.jpeg";
import lipoBeforeAfter4 from "@assets/IMG_2290_1770657411318.jpeg";
import lipoBeforeAfter5 from "@assets/IMG_2291_1770657411318.jpeg";

const TreatmentDetail = () => {
  const [, params] = useRoute("/tratamento/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug;

  const bgWatercolor = "/attached_assets/Untitled_design_1770238822059.png";
  const whatsappLink = "https://wa.me/5511916280110";

  const treatments: Record<string, any> = {
    "harmonizacao-orofacial": {
      title: "Harmonização Orofacial",
      content: [
        "A odontologia expandiu muito, e trata também o rosto do paciente como um conjunto, buscando harmonia, saúde, estética e bem estar geral.",
        "O cirurgião dentista é o profissional mais capacitado para exercer a Harmonização Orofacial, incluindo o equilíbrio da musculatura, posicionamento dos dentes, sorriso, bruxismo e o tratamento das rugas faciais, além de melhorar o contorno do rosto."
      ],
      details: ["Equilíbrio facial completo", "Tratamento de rugas faciais", "Melhora do contorno do rosto", "Abordagem holística", "Resultados naturais", "Tratamento do bruxismo"]
    },
    "toxina-botulinica": {
      title: "Toxina Botulínica",
      content: [
        "Neuro modulador conhecido popularmente como \"Botox\".",
        "Uma neurotoxina utilizada para várias funções como por exemplo: rangimento ou apertamento dos dentes (bruxismo), dores de cabeça causadas por tensão, sorriso gengival, melhora das rugas de expressão, \"pés de galinha\", rugas do queixo que vão surgindo com o envelhecimento.",
        "Além de ajudar bastante nos casos de assimetria facial.",
        "Independentemente do uso, seja para fins de tratamentos funcionais ou estéticos, o mecanismo de ação do medicamento se dá por bloqueio da liberação da acetilcolina (neurotransmissor responsável pela contração muscular), causando o relaxamento da musculatura no qual é aplicada.",
        "Embora o objetivo original do tratamento com toxina fosse paralisar os músculos-alvo, o resultado mais desejável e natural é a modulação da atividade muscular. Podemos melhorar as rugas da testa, abrir o olhar levantando a cauda da sobrancelha, arquear a sobrancelha se for o desejo do paciente. Necessário o planejamento individual de cada paciente.",
        "Portanto o uso da toxina botulínica está fundamentada em evidências científicas, é um recurso terapêutico eficaz, seguro e consistente, trazendo aos pacientes uma significativa melhora em relação à autoestima e qualidade de vida."
      ],
      details: ["Tratamento de bruxismo", "Melhora das rugas de expressão", "Tratamento de dores de cabeça", "Correção de sorriso gengival", "Assimetria facial", "Pés de galinha"]
    },
    "preenchimento-labial": {
      title: "Preenchimento Labial",
      content: [
        "Preenchimento realizado com ác. Hialurônico, sendo indicado para lábios finos, lábios assimétricos, para ganharmos volume (projeção) e/ou contorno, para melhorar o aspecto de \"boca triste\" (altura das comissuras labiais alinhadas) e prevenir o envelhecimento.",
        "Também podemos amenizar o código de barras (rugas que se formam ao redor da boca) e deixá-lo com volume de acordo com o perfil de cada paciente."
      ],
      details: ["Volume labial natural", "Contorno definido", "Correção de assimetrias", "Hidratação profunda", "Melhora do aspecto de boca triste", "Arco do cupido realçado"]
    },
    "preenchimento-acido-hialuronico": {
      title: "Preenchimento com Ác. Hialurônico",
      content: [
        "O Ác. Hialurônico é uma substância utilizada para preencher certas regiões da face com o objetivo de corrigir os sinais de envelhecimento, equilibrando a estética da face. É necessária uma análise facial bem-feita baseada nas proporções da face de cada paciente.",
        "Atualmente, o Ác. Hialurônico é a melhor escolha, por ser uma substância absorvível, e, além disso, temos um antídoto (substância que degrada o ác. Hialurônico), tornando um procedimento seguro.",
        "Suas indicações são: Efeito lifting facial, tratamento de sulcos (\"bigode chinês\", \"linha de marionete\"), tratamento de rugas finas, volumização de certas áreas da face, volumização e contorno de lábios, RINOMODELAÇÃO (nariz), melhora do contorno facial, preenchimento de MANDÍBULA, preenchimento de MENTO (queixo), preenchimento da MAÇÃ DO ROSTO (top model look).",
        "Harmonização Facial FULL FACE (rosto todo): Preenchimento com ácido Hialurônico em cada área da face que sofreu com o passar dos anos um processo de \"derretimento\" ou \"esvaziamento\" de estruturas que dão sustentação a nossa pele. O objetivo é devolver um formato mais harmônico para cada paciente melhorando a aparência facial."
      ],
      details: ["Efeito lifting facial", "Rinomodelação", "Preenchimento de mandíbula", "Preenchimento de mento (queixo)", "Maçã do rosto (top model look)", "Full Face completo"]
    },
    "bichectomia": {
      title: "Bichectomia",
      content: [
        "A Bichectomia é um procedimento cirúrgico que consiste na remoção da parte de um coxim gorduroso profundo localizado entre os músculos masséter e bucinador, na região das bochechas, o que gera aumento do corredor bucal e a diminuição tridimensional do terço inferior da face.",
        "A diminuição volumétrica da face após a Bichectomia pode ocorrer de duas formas distintas: Afinamento do terço inferior com triângularização da face ou marcação côncava na região das bochechas ao lado das comissuras (finalidade estética). Isso não depende do desejo do paciente, nem da habilidade do operador, e sim diretamente do tipo de crescimento ósseo que a face em questão desenvolveu.",
        "É uma cirurgia feita no consultório e com uma recuperação normalmente tranquila, além de não deixar cicatriz aparente. Uma vez removida, não é possível aplicá-las novamente.",
        "Indicada para pessoas que apresentam volume em excesso no terço inferior da face com desejo de esculpí-la, deixando mais evidente a curva de Ogee do paciente (contraste entre luz e sombra, concavidade e convexidade em uma vista oblíqua da face), ou para as pessoas que tem o hábito de morder involuntariamente as bochechas.",
        "Um rosto bem delineado com áreas de sombra e luz é o modelo de beleza que buscamos na harmonização facial."
      ],
      details: ["Afinamento do terço inferior", "Realce da curva de Ogee", "Sem cicatriz aparente", "Recuperação tranquila", "Cirurgia em consultório", "Resultado definitivo"]
    },
    "bioestimuladores": {
      title: "Bioestimuladores",
      content: [
        "Começamos a perder colágeno a partir dos 25 anos de idade. Uma perda de aproximadamente 1% ao ano. Então os sinais clínicos começam a aparecer: perda de volume, flacidez, elasticidade e hidratação da pele.",
        "Os Bioestimuladores são substâncias que quando injetadas na pele, promovem a formação de novo colágeno e portanto, proporcionando rejuvenescimento dos locais tratados.",
        "Recupera perda de volume, melhora flacidez, elasticidade, hidratação da pele, proporções perdidas, além da melhora do tônus e vitalidade cutânea.",
        "As substâncias utilizadas atualmente são a hidroxiapatita de cálcio (ex: RADIESSE) e o ác.poli-l-lático (ex: SCULPTRA).",
        "Temos também o PROFHILO - um bioremodelador tecidual. Um produto composto por 100% ácido hialurônico puro, totalmente compatível. Devido a remodelação dos tecidos, melhora a flacidez e a qualidade de pele (melhora as linhas finas), promovendo um glow na pele, sem volumização. Pode ser utilizado no rosto e pescoço.",
        "HARMONYCA - busca em uma seringa associar o efeito imediato do ácido hialurônico (fornece um efeito lifting) com o estímulo de colágeno proporcionado pela hidroxiapatita de cálcio (sustenta a produção de colágeno do próprio corpo)."
      ],
      details: ["Estímulo de colágeno", "RADIESSE", "SCULPTRA", "PROFHILO", "HARMONYCA", "Melhora da flacidez"]
    },
    "fios-pdo": {
      title: "Fios Faciais de PDO",
      content: [
        "Os fios de PDO são constituídos de polidioxanona (material biocompatível e absorvível pelo corpo) apresentando, portanto, grande capacidade de estímulo de colágeno, correção volumétrica das áreas deprimidas como sulcos, rugas, depressões cutâneas e cicatrizes atróficas, aumenta a espessura dérmica, além de reposicionar os principais ligamentos da face.",
        "Promove resultados eficazes, do bioestímulo de colágeno ao lifting, permitindo obter uma melhor neocolagênese.",
        "Existem vários tipos de fios:",
        "FIOS LISOS: São os bioestimuladores de colágeno. Observações clínicas demonstram que a inserção subcutânea dos fios lisos de PDO induz a produção de colágeno, aumenta a síntese de ácido hialurônico e melhora a circulação local.",
        "FIOS PARAFUSOS: Possuem um formato que promove maior produção de colágeno.",
        "FIOS ESPICULADOS: O verdadeiro aliado ao lifting. São os responsáveis por tracionar os tecidos no sentido oposto à ptose. São indicados para tração e sustentação de face e pescoço. Reduz flacidez dos tecidos ptosados e também promove lifting do supercílio (FOX EYES ou Lifting de sombrancelhas).",
        "O downtime (tempo de recuperação) é mínimo por ser uma técnica minimamente invasiva, podendo ser utilizada em todos os fototipos de pele."
      ],
      details: ["Fios Lisos (bioestímulo)", "Fios Parafusos", "Fios Espiculados (lifting)", "FOX EYES", "Lifting de sobrancelhas", "Recuperação mínima"]
    },
    "laminados-ceramicos": {
      title: "Laminados Cerâmicos",
      content: [
        "LENTES DE CONTATO DENTAL: É uma lâmina de porcelana muito fina moldada em uma impressora 3D e depois de pronta, cimentada uma a uma sobre os dentes do paciente.",
        "A lente de contato dental tem como objetivo deixar os dentes mais claros e sem defeitos, ou seja, perfeitos e alinhados, além de melhorar a autoestima do paciente. Indicada para casos de dentes mal posicionados, separados, quebrados ou desgastados. Podemos aumentar o comprimento dos dentes para as pessoas que possuem os dentes muito pequenos ou algum dente desproporcional à idade e tamanho. E o melhor é poder clarear os dentes e não escurecer com os hábitos alimentares.",
        "Um benefício muito grande da lente de contato dental é a prevenção da estrutura dental.",
        "FACETAS DE PORCELANA: A principal diferença entre a faceta e a lente está na espessura da porcelana. Na faceta em torno de 1mm e na lente de contato pode variar de 0,2mm a 0,5mm. As indicações são as mesmas para os dois formatos.",
        "COROAS DE PORCELANA: A coroa de porcelana é uma prótese fixa, sobre dente natural, pino protético ou sobre implante dentário, quando é necessário a substituição de um dente que foi perdido ou que não tem mais a possibilidade de ser mantido."
      ],
      details: ["Lentes de contato dental", "Facetas de porcelana", "Coroas de porcelana", "Clareamento permanente", "Dentes perfeitos e alinhados", "Impressão 3D"]
    },
    "lipoaspiracao-de-papada": {
      title: "Lipoaspiração de Papada",
      content: [
        "A Lipoaspiração de Papada, também conhecida como Lipo de Papada ou Lipoaspiração Submentoniana, é um procedimento cirúrgico minimamente invasivo que remove o excesso de gordura localizada na região abaixo do queixo, conhecida como papada.",
        "A gordura submentoniana pode ser de origem genética ou adquirida com o ganho de peso e o envelhecimento. Muitas vezes, mesmo com dieta e exercícios, essa gordura não desaparece, causando um incômodo estético significativo.",
        "O procedimento é realizado sob anestesia local com sedação, através de pequenas incisões praticamente imperceptíveis. Com o uso de microcânulas, a gordura é aspirada de forma precisa, respeitando a anatomia e proporcionando um contorno mandibular mais definido.",
        "A recuperação é relativamente rápida. O paciente utiliza uma faixa compressiva por alguns dias e pode retornar às atividades normais em poucos dias. Os resultados são progressivos e definitivos, uma vez que as células de gordura removidas não retornam.",
        "O resultado é um perfil mais definido, com o ângulo cervico-mentoniano (ângulo entre o queixo e o pescoço) mais marcado, trazendo jovialidade e harmonia ao rosto. A Dra. Marcela Puglisi realiza o procedimento com técnica refinada, garantindo resultados naturais e satisfatórios."
      ],
      details: ["Remoção definitiva da papada", "Contorno mandibular definido", "Recuperação rápida", "Sem cicatrizes visíveis", "Anestesia local com sedação", "Resultados naturais e duradouros"],
      beforeAfterImages: [
        { src: lipoBeforeAfter1, alt: "Antes e Depois - Lipoaspiração de Papada - Caso 1" },
        { src: lipoBeforeAfter2, alt: "Antes e Depois - Lipoaspiração de Papada - Caso 2" },
        { src: lipoBeforeAfter3, alt: "Antes e Depois - Lipoaspiração de Papada - Caso 3" },
        { src: lipoBeforeAfter4, alt: "Antes e Depois - Lipoaspiração de Papada - Caso 4" },
        { src: lipoBeforeAfter5, alt: "Antes e Depois - Lipoaspiração de Papada - Caso 5" }
      ]
    },
    "odontologia": {
      title: "Odontologia Estética",
      content: [
        "Muito além do que tratar os dentes, a odontologia de hoje tem o poder de aumentar a autoestima dos pacientes, trazendo equilíbrio, beleza e rejuvenescimento.",
        "Não é sobre devolver ou criar beleza. É sobre mudar vidas! Trazer alegria e autoestima. Essa é a Odontologia Estética.",
        "CLAREAMENTO DENTAL: Por diversos fatores, como o envelhecimento, genética, traumas, medicamentos (antibióticos a base de tetraciclina durante a infância), alimentos, podem contribuir para o escurecimento dos dentes. É possível deixar os dentes mais brancos com o Clareamento Dental e com resultados incríveis.",
        "Temos dois tipos de clareamento: CLAREAMENTO À LASER realizado no Consultório em apenas 3 sessões de 15min com o gel clareador associado à aplicação do laser. CLAREAMENTO CASEIRO realizado em casa todos os dias, preferencialmente antes de dormir, com uma duração de 10 dias ou mais.",
        "CIRURGIA GENGIVAL: Para aumento de coroa ou para sorriso gengival. Indicada para as pessoas que expõem muito a gengiva ao sorrir."
      ],
      details: ["Clareamento à Laser", "Clareamento Caseiro", "Cirurgia Gengival", "Aumento de coroa", "Correção sorriso gengival", "Autoestima renovada"]
    }
  };

  const treatment = slug ? treatments[slug] : null;

  if (!treatment) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgWatercolor})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="glass-panel p-16 rounded-[3rem] text-center">
          <h1 className="font-serif text-4xl text-[#4A3728] mb-8">Tratamento não encontrado</h1>
          <button 
            onClick={() => setLocation('/')}
            className="text-[#F4A48E] font-bold uppercase tracking-[0.3em] text-sm hover:text-[#4A3728] transition-colors"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen selection:bg-[#FDE2D9]"
      style={{
        backgroundImage: `url(${bgWatercolor})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto max-w-5xl py-32 px-6">
        <button 
          onClick={() => setLocation('/')}
          className="inline-flex items-center gap-4 text-[#8C7B6E] hover:text-[#4A3728] transition-colors mb-16 uppercase tracking-[0.4em] text-[10px] font-bold group cursor-pointer"
          data-testid="link-voltar-home"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Voltar para Home
        </button>
        
        <div className="glass-panel p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDE2D9]/20 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col mb-16">
            <span className="text-[11px] tracking-[0.6em] text-[#8C7B6E] uppercase font-bold mb-6">Tratamento Exclusivo</span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#4A3728] mb-12 italic leading-tight">{treatment.title}</h1>
            
            <div className="space-y-6 text-lg text-[#8C7B6E]/80 font-light leading-relaxed text-justify">
              {treatment.content.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {treatment.beforeAfterImages && treatment.beforeAfterImages.length > 0 && (
            <div className="mb-16 pt-12 border-t border-[#FDE2D9]/30">
              <span className="text-[11px] tracking-[0.6em] text-[#8C7B6E] uppercase font-bold mb-6 block">Resultados Reais</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4A3728] mb-10 italic">Antes & Depois</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatment.beforeAfterImages.map((img: { src: string; alt: string }, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                    data-testid={`img-before-after-${i}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 pt-12 border-t border-[#FDE2D9]/30">
            {treatment.details.map((detail: string, i: number) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                key={i} 
                className="flex items-center gap-5 p-5 glass-panel rounded-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-[#FDE2D9]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-[#F4A48E]" />
                </div>
                <span className="text-lg font-light text-[#4A3728]">{detail}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-watercolor w-full h-20 rounded-[2rem] tracking-[0.4em] text-[10px] uppercase font-black text-[#4A3728] shadow-2xl" data-testid="button-agendar-tratamento">
                <span>AGENDAR MINHA AVALIAÇÃO AGORA</span>
              </Button>
            </a>
            <p className="text-center mt-6 text-[10px] tracking-[0.3em] text-[#8C7B6E] uppercase font-bold opacity-60">Resultados garantidos por Dra. Marcela Puglisi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
