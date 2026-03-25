"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, ShoppingCart, HelpCircle } from "lucide-react";

const ContactPage = () => {
  const phoneNumber = "593999999999";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openWhatsApp = (message) => {
    if (typeof window !== "undefined") {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  };

  // 🚫 evita hydration error
  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-800">
          Contáctanos por WhatsApp
        </h1>
        <p className="text-slate-500 mt-3">
          Atención rápida y directa ⚡
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <button
          onClick={() =>
            openWhatsApp("Hola, quiero comprar un producto.")
          }
          className="flex flex-col items-center gap-4 bg-white shadow rounded-2xl p-8 hover:scale-105 transition"
        >
          <ShoppingCart size={32} />
          <h3 className="font-semibold">Comprar</h3>
        </button>

        <button
          onClick={() =>
            openWhatsApp("Hola, tengo una duda.")
          }
          className="flex flex-col items-center gap-4 bg-white shadow rounded-2xl p-8 hover:scale-105 transition"
        >
          <HelpCircle size={32} />
          <h3 className="font-semibold">Consultar</h3>
        </button>

        <button
          onClick={() =>
            openWhatsApp("Hola, necesito ayuda.")
          }
          className="flex flex-col items-center gap-4 bg-white shadow rounded-2xl p-8 hover:scale-105 transition"
        >
          <Phone size={32} />
          <h3 className="font-semibold">Soporte</h3>
        </button>
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() =>
            openWhatsApp("Hola, quiero más información.")
          }
          className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg"
        >
          <MessageCircle size={20} />
          Escribir por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactPage;