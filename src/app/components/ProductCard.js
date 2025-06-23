import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-pink-100 group overflow-hidden">
      <div className="overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          priority={product.isNew} // For above-the-fold images
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            New
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-baloo font-bold text-pink-700 mb-1">
          {product.name}
        </h3>
        <p className="text-pink-500 font-semibold mb-2 text-lg">
          ₹{product.price}
        </p>
        <ul className="text-sm text-gray-600 mb-4 flex-1">
          {product.ingredients.map((i, idx) => (
            <li key={idx}>• {i}</li>
          ))}
        </ul>
        <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 px-4 rounded-full font-semibold mt-auto hover:scale-105 hover:shadow-lg transition-transform">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
