"use client";
import React from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const products = useSelector((state) => state.product.list);

  // 🔥 Orden personalizado que quieres mostrar
  const customOrder = ["prod_18", "prod_2", "prod_3", "prod_14"];

  // 🔥 Filtrar y ordenar según tu lista
  const orderedProducts = products
    .filter((product) => customOrder.includes(product.id))
    .sort((a, b) => {
      return customOrder.indexOf(a.id) - customOrder.indexOf(b.id);
    });

  return (
    <div className="px-6 my-30 max-w-6xl mx-auto">
      <Title
        title="Productos destacados"
        description={`Mostrando ${orderedProducts.length} de ${products.length} productos`}
        href="/shop"
      />

      <div className="mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between">
        {orderedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
