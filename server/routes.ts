import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatSessionSchema, insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/chat/sessions", async (req, res) => {
    const parsed = insertChatSessionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.message });
    }
    const session = await storage.createChatSession(parsed.data);
    const welcomeMsg = await storage.addChatMessage({
      sessionId: session.id,
      sender: "assistant",
      message: `Olá ${session.patientName}! Seja bem-vindo(a) ao chat da Dra. Marcela Puglisi. Como posso ajudar você hoje? Você pode perguntar sobre nossos tratamentos, agendar uma consulta ou tirar dúvidas.`
    });
    res.json({ session, messages: [welcomeMsg] });
  });

  app.get("/api/chat/sessions/:id/messages", async (req, res) => {
    const messages = await storage.getChatMessages(req.params.id);
    res.json(messages);
  });

  app.post("/api/chat/sessions/:id/messages", async (req, res) => {
    const sessionId = req.params.id;
    const session = await storage.getChatSession(sessionId);
    if (!session) {
      return res.status(404).json({ error: "Sessão não encontrada" });
    }

    const parsed = insertChatMessageSchema.safeParse({
      ...req.body,
      sessionId,
      sender: "patient"
    });
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.message });
    }

    const patientMsg = await storage.addChatMessage(parsed.data);

    const userMessage = req.body.message?.toLowerCase() || "";
    let response = "";

    if (userMessage.includes("agendar") || userMessage.includes("consulta") || userMessage.includes("horário") || userMessage.includes("horario") || userMessage.includes("marcar")) {
      response = "Para agendar sua consulta, você pode entrar em contato diretamente pelo WhatsApp: (11) 91628-0110. Nossa equipe está disponível de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 14h. Será um prazer atendê-la!";
    } else if (userMessage.includes("botox") || userMessage.includes("toxina") || userMessage.includes("botulínica") || userMessage.includes("botulinica")) {
      response = "A Toxina Botulínica é um neuromodulador utilizado para tratamento de rugas, bruxismo, dores de cabeça e sorriso gengival. O procedimento é rápido, seguro e com resultados naturais. Gostaria de agendar uma avaliação?";
    } else if (userMessage.includes("preenchimento") || userMessage.includes("hialurônico") || userMessage.includes("hialuronico") || userMessage.includes("labial")) {
      response = "O preenchimento com Ácido Hialurônico é ideal para volumização, contorno facial, rinomodelação e rejuvenescimento. É um procedimento seguro com substância absorvível. Posso ajudar com mais informações?";
    } else if (userMessage.includes("harmonização") || userMessage.includes("harmonizacao") || userMessage.includes("orofacial")) {
      response = "A Harmonização Orofacial é um conjunto de procedimentos para melhorar a harmonia do rosto, incluindo toxina botulínica, preenchimentos, bioestimuladores e mais. Cada paciente recebe um planejamento personalizado. Deseja saber mais?";
    } else if (userMessage.includes("bichectomia") || userMessage.includes("bochecha")) {
      response = "A Bichectomia é um procedimento cirúrgico para afinamento facial, feito no consultório com recuperação tranquila e sem cicatriz aparente. Indicada para quem deseja um rosto mais esculpido. Quer agendar uma avaliação?";
    } else if (userMessage.includes("bioestimulador") || userMessage.includes("colágeno") || userMessage.includes("colageno") || userMessage.includes("sculptra") || userMessage.includes("radiesse")) {
      response = "Os Bioestimuladores (Radiesse, Sculptra, Profhilo, Harmonyca) promovem a formação de novo colágeno, combatendo flacidez e perda de volume. Resultados progressivos e naturais. Gostaria de mais detalhes?";
    } else if (userMessage.includes("fio") || userMessage.includes("pdo") || userMessage.includes("lifting") || userMessage.includes("fox eyes")) {
      response = "Os Fios de PDO são uma técnica minimamente invasiva para lifting facial, estímulo de colágeno e efeito FOX EYES. Recuperação mínima e resultados imediatos. Posso agendar sua avaliação?";
    } else if (userMessage.includes("lente") || userMessage.includes("faceta") || userMessage.includes("porcelana") || userMessage.includes("cerâmico") || userMessage.includes("ceramico")) {
      response = "As Lentes de Contato Dental e Facetas de Porcelana proporcionam dentes perfeitos, brancos e alinhados. Feitas com impressão 3D de alta precisão. Deseja agendar uma avaliação para o seu sorriso?";
    } else if (userMessage.includes("clareamento") || userMessage.includes("branquear") || userMessage.includes("branco")) {
      response = "Oferecemos Clareamento à Laser (3 sessões de 15min no consultório) e Clareamento Caseiro (10+ dias). Ambos são eficazes e seguros. Qual modalidade te interessa?";
    } else if (userMessage.includes("preço") || userMessage.includes("preco") || userMessage.includes("valor") || userMessage.includes("custo") || userMessage.includes("quanto")) {
      response = "Os valores variam conforme o tratamento e a avaliação individual. Para um orçamento personalizado, entre em contato pelo WhatsApp: (11) 91628-0110. Será um prazer ajudar!";
    } else if (userMessage.includes("endereço") || userMessage.includes("endereco") || userMessage.includes("onde") || userMessage.includes("localização") || userMessage.includes("localizacao")) {
      response = "Nosso consultório fica na Av. Cidade Jardim, 427 - 7º andar, São Paulo. Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 14h.";
    } else if (userMessage.includes("obrigad")) {
      response = "Por nada! Foi um prazer ajudar. Se tiver mais alguma dúvida, estou à disposição. Para agendar sua consulta, entre em contato pelo WhatsApp: (11) 91628-0110. Até breve!";
    } else {
      response = "Obrigada pela sua mensagem! Posso ajudar com informações sobre nossos tratamentos de Harmonização Orofacial, Toxina Botulínica, Preenchimentos, Bioestimuladores, Fios de PDO, Laminados Cerâmicos e muito mais. Sobre qual tratamento gostaria de saber mais? Ou posso ajudar a agendar uma consulta.";
    }

    const assistantMsg = await storage.addChatMessage({
      sessionId,
      sender: "assistant",
      message: response
    });

    res.json({ patientMessage: patientMsg, assistantMessage: assistantMsg });
  });

  app.post("/api/chat/sessions/:id/close", async (req, res) => {
    await storage.closeChatSession(req.params.id);
    res.json({ success: true });
  });

  return httpServer;
}
