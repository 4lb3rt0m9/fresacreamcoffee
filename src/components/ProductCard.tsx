type Product = {
  id: number
  name: string
  category: string
  price: string
  description: string
  detail: string
  image: string
}

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl transition">
      <div className="text-6xl mb-4">{product.image}</div>

      <span className="text-sm font-bold text-pink-600">
        {product.category}
      </span>

      <h3 className="mt-2 text-2xl font-black">
        {product.name}
      </h3>

      <p className="mt-3 text-zinc-600">
        {product.description}
      </p>

      <p className="mt-4 text-sm text-zinc-500">
        {product.detail}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <strong className="text-xl">{product.price}</strong>

        <a
          href={`https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20pedir%20${encodeURIComponent(product.name)}`}
          target="_blank"
          className="rounded-full bg-pink-600 px-5 py-2 text-white hover:bg-pink-700"
        >
          Pedir
        </a>
      </div>
    </article>
  )
}