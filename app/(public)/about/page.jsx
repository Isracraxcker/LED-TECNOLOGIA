"use client";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-6">
      <div className="max-w-4xl mx-auto my-16 flex flex-col gap-10 text-center">
        
        {/* 🟢 HERO MINIMAL */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-slate-700 to-[#453668] bg-clip-text text-transparent">
            Tecnología simple y confiable
          </h1>

          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Ofrecemos productos tecnológicos de calidad con una experiencia de compra rápida, clara y sin complicaciones.
          </p>

          <Link href="/shop">
            <button className="mt-7 inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-xl text-sm">
              Ir a la tienda
              <ArrowRightIcon size={18} />
            </button>
          </Link>
        </div>

        {/* 🔵 BLOQUES */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-blue-200 rounded-3xl p-6">
            <h2 className="font-semibold">Nuestra misión</h2>
            <p className="text-sm text-slate-700 mt-2">
              Hacer la tecnología accesible para todos.
            </p>
          </div>

          <div className="bg-orange-200 rounded-3xl p-6">
            <h2 className="font-semibold">Nuestra visión</h2>
            <p className="text-sm text-slate-700 mt-2">
              Ser una tienda confiable y moderna.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}