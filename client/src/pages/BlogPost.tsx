import React from "react";
import { useRoute, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug;

  const bgWatercolor = "/attached_assets/Untitled_design_1770238822059.png";
  const whatsappLink = "https://wa.me/5511916280110";

  const posts: Record<string, any> = {
    "harmonizacao-orofacial-guia": {
      title: "Harmonização Orofacial: O que é e como funciona",
      date: "Mar 2023",
      category: "Tratamentos",
      content: [
        "A odontologia expandiu muito, e trata também o rosto do paciente como um conjunto, buscando harmonia, saúde, estética e bem estar geral.",
        "O cirurgião dentista é o profissional mais capacitado para exercer a Harmonização Orofacial, incluindo o equilíbrio da musculatura, posicionamento dos dentes, sorriso, bruxismo e o tratamento das rugas faciais, além de melhorar o contorno do rosto.",
        "A Harmonização Orofacial é um conjunto de procedimentos estéticos combinados para melhorar a harmonia do rosto, transformando traços e tratando o envelhecimento facial com uma visão holística e individualizada.",
        "Entre os procedimentos mais realizados estão: aplicação de toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno, fios de PDO e bichectomia.",
        "Cada paciente recebe um planejamento personalizado, considerando suas características faciais únicas, desejos e expectativas. O objetivo é sempre alcançar resultados naturais que realcem a beleza individual."
      ]
    },
    "toxina-botulinica-completo": {
      title: "Toxina Botulínica: Muito além da estética",
      date: "Mar 2023",
      category: "Tratamentos",
      content: [
        "Neuro modulador conhecido popularmente como \"Botox\".",
        "Uma neurotoxina utilizada para várias funções como por exemplo: rangimento ou apertamento dos dentes (bruxismo), dores de cabeça causadas por tensão, sorriso gengival, melhora das rugas de expressão, \"pés de galinha\", rugas do queixo que vão surgindo com o envelhecimento.",
        "Além de ajudar bastante nos casos de assimetria facial.",
        "Independentemente do uso, seja para fins de tratamentos funcionais ou estéticos, o mecanismo de ação do medicamento se dá por bloqueio da liberação da acetilcolina (neurotransmissor responsável pela contração muscular), causando o relaxamento da musculatura no qual é aplicada.",
        "Embora o objetivo original do tratamento com toxina fosse paralisar os músculos-alvo, o resultado mais desejável e natural é a modulação da atividade muscular.",
        "Podemos melhorar as rugas da testa, abrir o olhar levantando a cauda da sobrancelha, arquear a sobrancelha se for o desejo do paciente. Necessário o planejamento individual de cada paciente.",
        "Portanto o uso da toxina botulínica está fundamentada em evidências científicas, é um recurso terapêutico eficaz, seguro e consistente, trazendo aos pacientes uma significativa melhora em relação à autoestima e qualidade de vida."
      ]
    },
    "bioestimuladores-guia": {
      title: "Bioestimuladores: Recupere o colágeno perdido",
      date: "Mar 2023",
      category: "Tratamentos",
      content: [
        "Começamos a perder colágeno a partir dos 25 anos de idade. Uma perda de aproximadamente 1% ao ano. Então os sinais clínicos começam a aparecer: perda de volume, flacidez, elasticidade e hidratação da pele.",
        "Os Bioestimuladores são substâncias que quando injetadas na pele, promovem a formação de novo colágeno e portanto, proporcionando rejuvenescimento dos locais tratados.",
        "Recupera perda de volume, melhora flacidez, elasticidade, hidratação da pele, proporções perdidas, além da melhora do tônus e vitalidade cutânea.",
        "As substâncias utilizadas atualmente são a hidroxiapatita de cálcio (ex: RADIESSE) e o ác.poli-l-lático (ex: SCULPTRA).",
        "Temos também o PROFHILO - um bioremodelador tecidual. Um produto composto por 100% ácido hialurônico puro, totalmente compatível. Devido a remodelação dos tecidos, melhora a flacidez e a qualidade de pele (melhora as linhas finas), promovendo um glow na pele, sem volumização. Pode ser utilizado no rosto e pescoço.",
        "HARMONYCA - Seguindo a busca pela naturalidade de resultados através da abordagem combinada de tratamentos, HARMONYCA busca em uma seringa associar o efeito imediato do ácido hialurônico (fornece um efeito lifting) com o estímulo de colágeno proporcionado pela hidroxiapatita de cálcio (sustenta a produção de colágeno do próprio corpo)."
      ]
    },
    "bichectomia-guia": {
      title: "Bichectomia: Afinamento facial definitivo",
      date: "Mar 2023",
      category: "Cirurgias",
      content: [
        "A Bichectomia é um procedimento cirúrgico que consiste na remoção da parte de um coxim gorduroso profundo localizado entre os músculos masséter e bucinador, na região das bochechas, o que gera aumento do corredor bucal e a diminuição tridimensional do terço inferior da face.",
        "A diminuição volumétrica da face após a Bichectomia pode ocorrer de duas formas distintas:",
        "Afinamento do terço inferior com triângularização da face ou marcação côncava na região das bochechas ao lado das comissuras (finalidade estética). Isso não depende do desejo do paciente, nem da habilidade do operador, e sim diretamente do tipo de crescimento ósseo que a face em questão desenvolveu.",
        "É uma cirurgia feita no consultório e com uma recuperação normalmente tranquila, além de não deixar cicatriz aparente. Uma vez removida, não é possível aplicá-las novamente.",
        "Indicada para pessoas que apresentam volume em excesso no terço inferior da face com desejo de esculpí-la, deixando mais evidente a curva de Ogee do paciente (contraste entre luz e sombra, concavidade e convexidade em uma vista oblíqua da face), ou para as pessoas que tem o hábito de morder involuntariamente as bochechas.",
        "Rostos mais infantilizados, mais arredondados, também são indicações de Bichectomia.",
        "Um rosto bem delineado com áreas de sombra e luz é o modelo de beleza que buscamos na harmonização facial."
      ]
    },
    "fios-pdo-guia": {
      title: "Fios de PDO: Do bioestímulo ao lifting",
      date: "Mar 2023",
      category: "Tratamentos",
      content: [
        "Os fios de PDO são constituídos de polidioxanona (material biocompatível e absorvível pelo corpo) apresentando, portanto, grande capacidade de estímulo de colágeno, correção volumétrica das áreas deprimidas como sulcos, rugas, depressões cutâneas e cicatrizes atróficas, aumenta a espessura dérmica, além de reposicionar os principais ligamentos da face.",
        "Promove resultados eficazes, do bioestímulo de colágeno ao lifting, permitindo obter uma melhor neocolagênese.",
        "Existem vários tipos de fios:",
        "FIOS LISOS: São os bioestimuladores de colágeno. Observações clínicas demonstram que a inserção subcutânea dos fios lisos de PDO induz a produção de colágeno, aumenta a síntese de ácido hialurônico e melhora a circulação local.",
        "FIOS PARAFUSOS: Possuem um formato que promove maior produção de colágeno.",
        "FIOS ESPICULADOS: O verdadeiro aliado ao lifting. São os responsáveis por tracionar os tecidos no sentido oposto à ptose. São indicados para tração e sustentação de face e pescoço. Reduz flacidez dos tecidos ptosados e também promove lifting do supercílio (FOX EYES ou Lifting de sombrancelhas).",
        "O downtime (tempo de recuperação) é mínimo por ser uma técnica minimamente invasiva, podendo ser utilizada em todos os fototipos de pele."
      ]
    },
    "preenchimento-hialuronico-guia": {
      title: "Preenchimento com Ácido Hialurônico: Guia completo",
      date: "Mar 2023",
      category: "Tratamentos",
      content: [
        "O Ác. Hialurônico é uma substância utilizada para preencher certas regiões da face com o objetivo de corrigir os sinais de envelhecimento, equilibrando a estética da face. É necessária uma análise facial bem-feita baseada nas proporções da face de cada paciente.",
        "Atualmente, o Ác. Hialurônico é a melhor escolha, por ser uma substância absorvível, e, além disso, temos um antídoto (substância que degrada o ác. Hialurônico), tornando um procedimento seguro.",
        "Suas indicações são:",
        "- Efeito lifting facial",
        "- Tratamento de sulcos (\"bigode chinês\", \"linha de marionete\")",
        "- Tratamento de rugas finas",
        "- Volumização de certas áreas da face",
        "- Volumização e contorno de lábios",
        "- RINOMODELAÇÃO (nariz)",
        "- Melhora do contorno facial",
        "- Preenchimento de MANDÍBULA",
        "- Preenchimento de MENTO (queixo)",
        "- Preenchimento da MAÇÃ DO ROSTO (top model look)",
        "Harmonização Facial FULL FACE (rosto todo): Preenchimento com ácido Hialurônico em cada área da face que sofreu com o passar dos anos um processo de \"derretimento\" ou \"esvaziamento\" de estruturas que dão sustentação a nossa pele. O objetivo é devolver um formato mais harmônico para cada paciente melhorando a aparência facial."
      ]
    },
    "laminados-ceramicos-guia": {
      title: "Laminados Cerâmicos: O sorriso perfeito",
      date: "Mar 2023",
      category: "Odontologia",
      content: [
        "LENTES DE CONTATO DENTAL: É uma lâmina de porcelana muito fina moldada em uma impressora 3D e depois de pronta, cimentada uma a uma sobre os dentes do paciente.",
        "A lente de contato dental tem como objetivo deixar os dentes mais claros e sem defeitos, ou seja, perfeitos e alinhados, além de melhorar a autoestima do paciente.",
        "Indicada para casos de dentes mal posicionados, separados, quebrados ou desgastados. Podemos aumentar o comprimento dos dentes para as pessoas que possuem os dentes muito pequenos ou algum dente desproporcional à idade e tamanho. E o melhor é poder clarear os dentes e não escurecer com os hábitos alimentares.",
        "Um benefício muito grande da lente de contato dental é a prevenção da estrutura dental.",
        "O mais frequente é colocar as lentes nos dentes da frente mas geralmente no sorriso das pessoas aparece até os pré-molares, então costumamos fazer as lentes de pré-molar à pré-molar. Podendo ser colocadas perfeitamente até os últimos dentes da arcada (molares).",
        "FACETAS DE PORCELANA: A principal diferença entre a faceta e a lente está na espessura da porcelana. Na faceta em torno de 1mm e na lente de contato pode variar de 0,2mm a 0,5mm.",
        "COROAS DE PORCELANA: A coroa de porcelana é uma prótese fixa, sobre dente natural, pino protético ou sobre implante dentário, quando é necessário a substituição de um dente que foi perdido ou que não tem mais a possibilidade de ser mantido."
      ]
    },
    "clareamento-dental-guia": {
      title: "Clareamento Dental: Tipos e resultados",
      date: "Mar 2023",
      category: "Odontologia",
      content: [
        "Por diversos fatores, como o envelhecimento, genética, traumas, medicamentos (antibióticos a base de tetraciclina durante a infância), alimentos, podem contribuir para o escurecimento dos dentes.",
        "É possível deixar os dentes mais brancos com o Clareamento Dental e com resultados incríveis. Esse tratamento estético tem como objetivo eliminar os pigmentos que deixam os dentes manchados ou escurecidos, deixando os dentes mais claros.",
        "Todas as pessoas que têm dentes permanentes podem fazer o clareamento dental.",
        "Temos dois tipos de clareamento:",
        "CLAREAMENTO À LASER: Realizado no Consultório em apenas 3 sessões de 15min com o gel clareador associado à aplicação do laser. Podendo ser realizado na mesma semana as 3 sessões. É um método seguro e eficaz.",
        "CLAREAMENTO CASEIRO: Realizado em casa todos os dias, preferencialmente antes de dormir, com uma duração de 10 dias ou mais, de acordo com a necessidade de cada paciente. Feito com uma moldeira de silicone e o paciente põe o gel na moldeira e então a moldeira na boca.",
        "Os dois modos são eficazes. O que difere é o tempo de ação entre eles, pois o clareamento à laser além de ser mais rápido, causa um maior conforto para o paciente.",
        "Falando da sensibilidade, é muito raro o paciente ficar com os dentes sensíveis devido ao clareamento. Mas se isso ocorrer ou se o paciente for muito sensível, podemos fazer o tratamento mais gradual se não houver urgência em um resultado tão rápido."
      ]
    }
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
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
          <h1 className="font-serif text-4xl text-[#4A3728] mb-8">Artigo não encontrado</h1>
          <button 
            onClick={() => setLocation('/blog')}
            className="text-[#F4A48E] font-bold uppercase tracking-[0.3em] text-sm hover:text-[#4A3728] transition-colors"
          >
            Voltar para Blog
          </button>
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={() => setLocation('/blog')}
          className="inline-flex items-center gap-2 text-[#8C7B6E] hover:text-[#4A3728] transition-colors mb-12 uppercase tracking-[0.3em] text-[10px] font-bold cursor-pointer"
          data-testid="link-voltar-blog"
        >
          <ArrowLeft size={14} /> Voltar para Blog
        </button>
        
        <article className="glass-panel p-10 md:p-16 rounded-[3rem]">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.3em] text-[#8C7B6E] uppercase">{post.date}</span>
            <span className="text-[9px] tracking-[0.2em] text-[#F4A48E] uppercase font-bold bg-[#FDE2D9]/30 px-3 py-1 rounded-full">{post.category}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-[#4A3728] italic mb-12 leading-tight">{post.title}</h1>
          
          <div className="space-y-6 text-[#8C7B6E]/80 font-light leading-relaxed text-lg text-justify">
            {post.content.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#FDE2D9]/30">
            <p className="text-center text-[#8C7B6E] font-light mb-8">
              Ficou com alguma dúvida? Entre em contato para uma avaliação personalizada.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-watercolor w-full h-16 rounded-2xl tracking-[0.3em] text-[10px] font-bold text-[#4A3728] shadow-xl" data-testid="button-agendar-blog">
                <span>AGENDAR CONSULTA</span>
              </Button>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
