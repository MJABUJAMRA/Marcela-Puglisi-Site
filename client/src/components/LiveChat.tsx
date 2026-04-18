import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  message: string;
  createdAt: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"intro" | "chat">("intro");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const whatsappLink = "https://wa.me/5511916280110";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && step === "chat") {
      inputRef.current?.focus();
    }
  }, [isOpen, step]);

  const quickReplies = [
    "Quero agendar uma consulta",
    "Quais tratamentos disponíveis?",
    "Qual o endereço?",
    "Quanto custa?"
  ];

  const startChat = async () => {
    if (!name.trim()) return;
    try {
      const res = await fetch("/api/chat/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientName: name, patientPhone: phone || null })
      });
      const data = await res.json();
      setSessionId(data.session.id);
      setMessages(data.messages);
      setStep("chat");
    } catch {
      setMessages([{
        id: "error",
        sender: "assistant",
        message: "Desculpe, houve um problema ao conectar. Tente novamente ou entre em contato pelo WhatsApp: (11) 91628-0110.",
        createdAt: new Date().toISOString()
      }]);
      setStep("chat");
    }
  };

  const sendMessage = async (text?: string) => {
    const msg = text || inputMessage.trim();
    if (!msg || !sessionId) return;

    const tempMsg: Message = {
      id: `temp-${Date.now()}`,
      sender: "patient",
      message: msg,
      createdAt: new Date().toISOString()
    };
    setMessages(prev => [...prev, tempMsg]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setMessages(prev => [
        ...prev.filter(m => m.id !== tempMsg.id),
        data.patientMessage,
        data.assistantMessage
      ]);
    } catch {
      setMessages(prev => [...prev, {
        id: `err-${Date.now()}`,
        sender: "assistant",
        message: "Desculpe, não consegui processar sua mensagem. Tente novamente.",
        createdAt: new Date().toISOString()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden shadow-2xl border border-[#FDE2D9]/40"
            style={{ maxHeight: "min(600px, calc(100vh - 8rem))" }}
            data-testid="chat-window"
          >
            <div className="bg-gradient-to-r from-[#4A3728] to-[#6B5E54] p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-sm">Dra. Marcela Puglisi</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/70 text-[10px] tracking-wider uppercase">Online agora</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                data-testid="button-close-chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#FDF8F5] flex flex-col" style={{ height: "440px" }}>
              {step === "intro" ? (
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h4 className="font-serif text-xl text-[#4A3728] mb-2">Bem-vindo(a)!</h4>
                    <p className="text-sm text-[#6B5E54] font-light">
                      Tire suas dúvidas sobre nossos tratamentos ou agende uma consulta.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B6E] font-bold block mb-2">Seu nome *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && startChat()}
                        placeholder="Digite seu nome"
                        className="w-full bg-white border border-[#FDE2D9] rounded-xl py-3 px-4 outline-none text-sm focus:border-[#F4A48E] transition-colors text-[#4A3728]"
                        data-testid="input-chat-name"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] tracking-[0.3em] uppercase text-[#8C7B6E] font-bold block mb-2">WhatsApp (opcional)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && startChat()}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-white border border-[#FDE2D9] rounded-xl py-3 px-4 outline-none text-sm focus:border-[#F4A48E] transition-colors text-[#4A3728]"
                        data-testid="input-chat-phone"
                      />
                    </div>
                    <button
                      onClick={startChat}
                      disabled={!name.trim()}
                      className="w-full bg-gradient-to-r from-[#F4A48E] to-[#E8927A] text-white py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="button-start-chat"
                    >
                      Iniciar Conversa
                    </button>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-[#4A3728] text-xs tracking-wider py-2 hover:text-[#F4A48E] transition-colors"
                    >
                      <Phone size={14} />
                      Ou fale pelo WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.sender === "patient"
                              ? "bg-[#4A3728] text-white rounded-br-md"
                              : "bg-white text-[#4A3728] border border-[#FDE2D9]/50 rounded-bl-md shadow-sm"
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white text-[#8C7B6E] border border-[#FDE2D9]/50 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                          <div className="flex gap-1.5 items-center">
                            <div className="w-2 h-2 rounded-full bg-[#F4A48E] animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 rounded-full bg-[#F4A48E] animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 rounded-full bg-[#F4A48E] animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {messages.length <= 1 && (
                    <div className="px-4 pb-2 flex flex-wrap gap-2">
                      {quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => sendMessage(qr)}
                          className="text-[10px] tracking-wider bg-white border border-[#FDE2D9] text-[#4A3728] px-3 py-1.5 rounded-full hover:bg-[#FDE2D9]/30 transition-colors"
                          data-testid={`button-quick-reply-${qr.slice(0, 10)}`}
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-3 border-t border-[#FDE2D9]/30 bg-white">
                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-[#FDF8F5] rounded-xl py-3 px-4 text-sm outline-none border border-transparent focus:border-[#FDE2D9] transition-colors text-[#4A3728]"
                        data-testid="input-chat-message"
                      />
                      <button
                        onClick={() => sendMessage()}
                        disabled={!inputMessage.trim()}
                        className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F4A48E] to-[#E8927A] text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-40 shrink-0"
                        data-testid="button-send-message"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 rounded-full bg-gradient-to-r from-[#F4A48E] to-[#E8927A] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        whileTap={{ scale: 0.95 }}
        data-testid="button-toggle-chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </>
  );
};

export default LiveChat;
