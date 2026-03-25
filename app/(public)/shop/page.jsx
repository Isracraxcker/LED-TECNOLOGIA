"use client";
import { Suspense } from "react";
import ShopContent from "./ShopContent";

export default function Shop() {
  return (
    <Suspense fallback={<div className="p-10">Cargando...</div>}>
      <ShopContent />
    </Suspense>
  );
}
