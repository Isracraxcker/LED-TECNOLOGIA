"use client";
import { ShoppingCart, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.total);

  return (
    <nav className="relative bg-white">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
          
          {/* 🏷️ LOGO */}
          <Link
            href="/"
            className="relative text-4xl font-semibold text-slate-700"
          >
            <span className="text-purple-600">LED</span>Tecnologia
            <span className="text-purple-600 text-5xl leading-0">.</span>
          </Link>

          {/* 🧭 MENU */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
            
            <Link href="/" className="hover:text-black transition">
              Inicio
            </Link>

            <Link href="/shop" className="hover:text-black transition">
              Tienda
            </Link>

            <Link href="/about" className="hover:text-black transition">
              Sobre Nosotros
            </Link>

            <Link href="/contact" className="hover:text-black transition">
              Contacto
            </Link>

            {/* 📄 BOTÓN CATÁLOGO */}
            <div className="relative group">
              
              {/* Abrir PDF */}
              <a
                href="/catalogo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-black to-slate-700 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow hover:scale-105 active:scale-95 transition"
              >
                <Download size={16} />
                Catálogo
                <ExternalLink size={14} className="opacity-70" />
              </a>

              {/* 🔥 Badge */}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                NEW
              </span>

              {/* 📥 Descargar (hover) */}
              <a
                href="/catalogo.pdf"
                download
                className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white border text-xs px-3 py-1 rounded shadow transition"
              >
                Descargar PDF
              </a>
            </div>

            {/* 🛒 CARRITO */}
            <Link
              href="/cart"
              className="relative hover:scale-105 transition"
            >
              <ShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>
        </div>
      </div>

      <hr className="border-gray-200" />
    </nav>
  );
};

export default Navbar;