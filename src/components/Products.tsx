import { products } from "../data/products"

export default function Products() {
  return (
    <section id="menu" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.25em] text-pink-500">
          Nuestro menú
        </p>

        <h2 className="mt-3 text-5xl font-black tracking-tight">
          Antojos que se venden solos
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-7xl">{product.emoji}</div>

              <h3 className="mt-8 text-3xl font-black">
                {product.name}
              </h3>

              <p className="mt-4 text-zinc-600">
                {product.text}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-2xl font-black text-pink-500">
                  {product.price}
                </span>

                <a
                  href={`https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20pedir%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  className="rounded-full bg-zinc-950 px-5 py-3 font-bold text-white hover:bg-zinc-800"
                >
                  Pedir
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}