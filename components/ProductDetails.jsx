"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import { TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const router = useRouter();

  const [mainImage, setMainImage] = useState(product.images[0]);

  const quantity = cart[productId] || 1;

  // 📲 WHATSAPP CONFIG
  const phone = "593989160612"; // 👈 CAMBIA POR TU NÚMERO

  const message = `Hola, quiero comprar:

📌 Producto: ${product.name}
💰 Precio: ${currency}${product.price}
📦 Cantidad: ${quantity}

¿Está disponible?`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="flex max-lg:flex-col gap-12">
      {/* 🖼️ IMÁGENES */}
      <div className="flex max-sm:flex-col-reverse gap-3">
        <div className="flex sm:flex-col gap-3">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(product.images[index])}
              className="bg-slate-100 flex items-center justify-center size-26 rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                className="group-hover:scale-103 group-active:scale-95 transition"
                alt=""
                width={45}
                height={45}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg">
          <Image src={mainImage} alt="" width={250} height={250} />
        </div>
      </div>

      {/* 📄 INFO */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-slate-800">
          {product.name}
        </h1>

        {/* 💵 PRECIO */}
        <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
          <p>
            {currency}
            {product.price}
          </p>
          <p className="text-xl text-slate-500 line-through">
            {currency}
            {product.mrp}
          </p>
        </div>

        {/* 🏷️ DESCUENTO */}
        <div className="flex items-center gap-2 text-slate-500">
          <TagIcon size={14} />
          <p>
            Ahorra{" "}
            {(((product.mrp - product.price) / product.mrp) * 100).toFixed(0)}%
            ahora mismo
          </p>
        </div>

        {/* 📦 STOCK */}
        <p className="text-sm mt-4">
          {product.stock > 0 ? (
            <span className="text-green-600">
              ✅ {product.stock} disponibles
            </span>
          ) : (
            <span className="text-red-500">❌ Sin stock</span>
          )}
        </p>

        {/* 🔢 CANTIDAD */}
        <div className="flex items-end gap-5 mt-10">
          {/* <div className="flex flex-col gap-3">
            <p className="text-lg text-slate-800 font-semibold">Cantidad</p>
            <Counter productId={productId} />
          </div> */}

          {/* 📲 BOTÓN WHATSAPP */}
          {product.stock > 0 && (
            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 text-sm font-medium rounded active:scale-95 transition"
            >
              Comprar por WhatsApp
            </button>
          )}
        </div>

        <hr className="border-gray-300 my-5" />

        {/* 🚚 INFO EXTRA */}
        <div className="flex flex-col gap-4 text-slate-500">
          <p className="flex gap-3">
            <EarthIcon className="text-slate-400" />
            Envío GRATIS por Servientrega
          </p>
          <p className="flex gap-3">
            <CreditCardIcon className="text-slate-400" />
            Pago 100% seguro
          </p>
          <p className="flex gap-3">
            <UserIcon className="text-slate-400" />
            Con la confianza de las mejores marcas
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
