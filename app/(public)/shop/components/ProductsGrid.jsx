import ProductCard from "@/components/ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No hay productos 😢
        </p>
      )}
    </div>
  );
}