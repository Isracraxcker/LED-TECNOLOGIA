"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import FiltersSidebar from "./components/FiltersSidebar";
import ProductsGrid from "./components/ProductsGrid";

export default function ShopContent() {
  const router = useRouter();
  const products = useSelector((state) => state.product.list);

  const [filters, setFilters] = useState({
    search: "",
    min: "",
    max: "",
    category: "",
  });

  // 🔥 FILTRO CENTRAL
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchMin = filters.min
      ? product.price >= Number(filters.min)
      : true;

    const matchMax = filters.max
      ? product.price <= Number(filters.max)
      : true;

    const matchCategory = filters.category
      ? product.category === filters.category
      : true;

    return matchSearch && matchMin && matchMax && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* HEADER */}
      <h1
        onClick={() => router.push("/shop")}
        className="text-2xl text-slate-700 my-6 cursor-pointer"
      >
        Productos
      </h1>

      {/* LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* FILTROS */}
        <FiltersSidebar filters={filters} setFilters={setFilters} />

        {/* PRODUCTOS */}
        <ProductsGrid products={filteredProducts} />
      </div>
    </div>
  );
}