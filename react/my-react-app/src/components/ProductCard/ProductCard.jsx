export default function ProductCard({ product }) {
  const { name, price, inStock, rating, tags, image } = product;

  return (
    <div className="border rounded-lg p-4 shadow-md w-72">
      <img
        src={image}
        alt={name}
        className="rounded-md mb-4 w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-lg text-gray-700 mb-1">
        가격: {price.toLocaleString()}원
      </p>
      <p
        className={`mb-2 font-medium ${
          inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        재고 상태: {inStock ? "재고 있음" : "품절"}
      </p>
      <p className="text-sm text-gray-500 mb-4">평점: {rating} / 5</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
